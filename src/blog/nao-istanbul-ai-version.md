---
layout: post
title: "Restoring the NAO Istanbul recording, part 2: the AI version"
description: "Turning the audience down with a source-separation model and generating the missing high frequencies with AudioSR: what the two models did, how I limited them, and where they went wrong."
date: 2026-10-18T20:00:00Z
tags:
  - audio
  - machine learning
  - music
---

{% include "blog/viz-style.html" %}

In [part 1](/blog/nao-istanbul-phone-recording/) I restored my phone recording of the National Arab Orchestra's concert in Istanbul with ordinary signal processing. Two problems were left. Nothing was recorded above about 7 kHz, and the audience is loud, in places louder than the orchestra. There are machine-learning models for both, so I made a second version of the album with them: the same 17 tracks, cut at the same points.

This post is about that version. The first model splits the recording into audience and stage, and I turned the audience down. The second, AudioSR, generates the frequencies above 5.5 kHz that the phone never captured. So everything above 5.5 kHz in this version was made up by a model, not recorded. Below that it is the same recording as in part 1.

## The chain

1. Start from the EQ-corrected recording from part 1, before compression.
2. Split it into an audience stem and a stage stem.
3. Run AudioSR on the stage stem only, and keep its output only above 5.5 kHz.
4. Mix the two stems back together with the audience 12 dB down.
5. Apply the same compression and the same −14 LUFS loudness target as the version without models.

Both models ran on my laptop's GPU (an RTX A5000 Laptop with 16 GB). For the 1 hour 56 minute concert the separation took about 45 minutes and AudioSR about 90.

## Separating the audience

The separation model is a Mel-Band RoFormer that aufr33 and viperx trained to split crowd noise from music (`mel_band_roformer_crowd`, SDR 8.71 on their test set). I ran it through [python-audio-separator](https://github.com/nomadkaraoke/python-audio-separator). It returns two stems, one for the audience and one for everything else.

There was one trap. The tool normalises its output, so the stage stem does not come back at the level it had inside the input. Subtract it as it is and the audience stem is full of music. I measured the scale with a least-squares fit in 93 stretches where the music clearly dominates. The median factor was 2.5726, and all 93 fits fell between 2.570 and 2.598. I scaled the stage stem by that factor and defined the audience stem as the input minus the stage stem. That way the two always add up exactly to the original, and the audience level becomes a free knob: at 0 dB you get the recording back sample for sample.

Averaged over the concert, the audience stem sits 24 dB below the stage stem (−46.8 against −22.9 dBFS RMS). In applause it is on top. That contrast is what part 1 used to find where each piece ends.

The model has a clear idea of what an audience is: applause, clapping along, cheering, murmur. Anything with a pitch it puts on the stage. When people around me sang along, the singing stayed in the stage stem; comparing the pitch content (chroma) of the two stems in five-second windows, I found almost no melody in the audience stem. The shout in *Şaşkın* that I mentioned in part 1 went to the stage too. During that second the audience stem drops by about 30 dB and the stage stem jumps up. So the AI version does not remove singing along or shouts, only noise-like sounds.

I did not remove the audience completely. Applause after a piece is part of a concert, and at the start of this one the conductor had asked the audience to respond, in the tradition of *tarab*. I turned it down by 12 dB. In the encore, *Kara Köprü Narlıktır*, the hall claps along almost as loud as the orchestra and the clapping is part of the rhythm, so there it went down by only 6 dB, with a five-second transition at the start of the track.

### The 12 dB did not survive mastering

Both versions go through the same compressor, 1.8:1 above −26 dB, and applause is loud enough to fall in its range. At 1.8:1 a 12 dB difference at the input becomes roughly 12 / 1.8 ≈ 6.7 dB at the output. On top of that, removing applause lowers the integrated loudness of the whole concert, so the loudness normalisation raised the AI version by 1.1 dB. The music is therefore 1.1 dB louder than in the version without models.

Measured on the finished albums, with 3-second short-term loudness, applause in the AI version is 5 to 7 dB quieter than in the version without models. Relative to the music it went down by about 6 to 8 dB, not 12. In the encore the difference is only 1 to 3 dB. The fix would have been simple: compress the stage stem before mixing the audience back in, or turn the audience down further to make up for it.

<figure class="viz-figure">
{% include "blog/nao-istanbul-ai/seviye.svg" %}
{% include "blog/nao-istanbul-ai/seviye-m.svg" %}
<figcaption>Figure 1. Short-term loudness (3-second window) over the end of <em>Wahashtini</em> and the start of the next song. Shaded stretches are applause. Without models, the applause after the song is the loudest moment, around −10 LUFS against about −14 for the music; in the AI version it sits below the music. During the music the AI version runs 1.1 dB higher because of loudness normalisation. Hover, tap or use the arrow keys for values.</figcaption>
</figure>

<details class="data">
<summary>Data table for figure 1</summary>

{% include "blog/nao-istanbul-ai/tablo-seviye.md" %}
</details>

The clips in this section come straight from the two albums with the same gain applied to both, so the level differences you hear are real.

<div class="ab">
<div><p>End of <em>Wahashtini</em> and applause, without models</p><audio controls preload="none" src="/assets/blog/nao-istanbul-ai/alkis-normal.mp3"></audio></div>
<div><p>End of <em>Wahashtini</em> and applause, AI version</p><audio controls preload="none" src="/assets/blog/nao-istanbul-ai/alkis-ai.mp3"></audio></div>
<div><p><em>Kara Köprü Narlıktır</em>, near the end, without models</p><audio controls preload="none" src="/assets/blog/nao-istanbul-ai/final-normal.mp3"></audio></div>
<div><p><em>Kara Köprü Narlıktır</em>, near the end, AI version</p><audio controls preload="none" src="/assets/blog/nao-istanbul-ai/final-ai.mp3"></audio></div>
<div><p><em>Şaşkın</em>, the shout at 0:08, without models</p><audio controls preload="none" src="/assets/blog/nao-istanbul-ai/nida-normal.mp3"></audio></div>
<div><p><em>Şaşkın</em>, the shout at 0:08, AI version</p><audio controls preload="none" src="/assets/blog/nao-istanbul-ai/nida-ai.mp3"></audio></div>
</div>

## Generating the missing high frequencies

No filter can bring back what the phone never recorded, because above 7 kHz there is no signal to amplify. [AudioSR](https://github.com/haoheliu/versatile_audio_super_resolution) (Haohe Liu and others, 2023) does something else. It is a latent diffusion model that takes band-limited audio and generates a full-band 48 kHz version, guessing what the upper frequencies should contain from what it hears below.

AudioSR works on about ten seconds at a time. I fed it the stage stem in windows of 10.24 seconds overlapping by 0.64 seconds, 725 windows in all, and crossfaded the results. Each window got its own fixed seed, 50 diffusion steps and a guidance scale of 3.5. One run used 8.8 GB of GPU memory.

I did not let the model touch the part of the spectrum that was actually recorded:

- From its output I keep only what lies above 5.5 kHz, using an 8th-order Butterworth high-pass run forwards and backwards, so it adds no phase shift. Below 5.5 kHz the original signal stays, separated with the exact complement of the same filter, so the two parts add up without a gap.
- AudioSR normalises its input internally, so its output level is arbitrary. For every window I matched the output to the input in the 3.5 to 5.5 kHz band, which both of them contain, before taking the top.
- Only the stage stem went through AudioSR. The audience stem keeps the dull top of the original, which matters little at −12 dB.

<figure class="viz-figure">
{% include "blog/nao-istanbul-ai/spektrum-ai.svg" %}
{% include "blog/nao-istanbul-ai/spektrum-ai-m.svg" %}
<figcaption>Figure 2. Average spectrum of <em>Wa'id</em>, measured on the 10.8 minutes where the audience is negligible, against the orchestra's studio release. All curves are set to 0 dB at 200 to 400 Hz. Below 4 kHz the two versions of the album are identical. Around 8 kHz the AI version lands almost exactly on the studio release; above 10 kHz it is 3 to 5 dB brighter.</figcaption>
</figure>

<details class="data">
<summary>Data table for figure 2</summary>

{% include "blog/nao-istanbul-ai/tablo-spektrum.md" %}
</details>

On music, the AI version carries about 25 dB more energy above 7 kHz than the version without models. Up to 4 kHz the two differ by 0.0 dB in *Wa'id* and by less than 1 dB in the other songs I checked, so the real recording is untouched there. Around the 5.5 kHz seam there is a shallow dip of 1 to 2 dB, where the fading original and the fading generated part do not quite fill each other in. And from 10 kHz upward the model overshoots: on average it puts more air above 10 kHz than the orchestra's own studio recording has.

<figure class="viz-figure">
<img src="/assets/blog/nao-istanbul-ai/spektrogram-waid.webp" alt="Two spectrograms of the same 20 seconds of Wa'id, from 0 to 20 kHz. Without models, the signal stops just above 5 kHz. In the AI version, short vertical streaks reach up to 20 kHz at the start of notes, while the horizontal lines of sustained tones stop near the dashed line at 5.5 kHz." width="1360" height="980" loading="lazy">
<figcaption>Figure 3. The same 20 seconds of <em>Wa'id</em> as in part 1, now up to 20 kHz. The dashed line is the 5.5 kHz seam.</figcaption>
</figure>

The spectrogram shows what kind of high end the model invents. It is mostly vertical: short broadband bursts at the start of notes, reaching up to 20 kHz. The horizontal lines of sustained tones mostly stop near the seam; the model does not carry the harmonics of the strings and the voice upward. What you get is the attack and air of the music, not its overtones.

With 725 separately generated windows I expected seams. I measured the level above 6 kHz in 50 ms steps over the whole concert and folded it onto the 9.6-second window grid. The change from one step to the next is the same at the crossfades as anywhere else, about 3.4 dB on average. There are no measurable seams.

Two side effects. The generated highs raised the inter-sample peaks: with the same limiter as the version without models, the true peak reached +0.2 dBTP. Running the limiter at four times the sample rate (192 kHz) brought it down to −0.9 dBTP. And the generated top is noise-like, so it compresses worse: the AI album is 669 MB of FLAC against 609 MB.

These two clips are matched to the same loudness individually, as in part 1, because the AI version is 1.1 dB louder overall.

<div class="ab">
<div><p><em>Wa'id</em>, without models</p><audio controls preload="none" src="/assets/blog/nao-istanbul-ai/waid-normal.mp3"></audio></div>
<div><p><em>Wa'id</em>, AI version</p><audio controls preload="none" src="/assets/blog/nao-istanbul-ai/waid-ai.mp3"></audio></div>
</div>

## The two versions side by side

<div class="viz-tiles two">
<div class="viz-tile"><p class="l">Below 4 kHz, on music</p><p class="v">≈ 0 dB</p><p class="d">the same recording</p></div>
<div class="viz-tile"><p class="l">Above 7 kHz, on music</p><p class="v">+25 dB</p><p class="d">generated by AudioSR</p></div>
<div class="viz-tile"><p class="l">Applause</p><p class="v">−5 to −7 dB</p><p class="d">from −12 dB in the mix</p></div>
<div class="viz-tile"><p class="l">GPU time</p><p class="v">≈ 2 h 15 min</p><p class="d">45 min separation, 90 min AudioSR</p></div>
</div>

By the measurements, the AI version is closer to the studio release in the upper frequencies and has less applause. Whether that makes it better is a matter of taste. What the model adds is plausible, not true: it has never heard this concert above 7 kHz, so it fills in what music like this usually has up there. The album I shared in part 1 is the version without models.

<details class="data">
<summary>All settings</summary>

- Input: the EQ-corrected recording from part 1 (linear-phase FIR, 30 Hz high-pass), 48 kHz mono.
- Separation: python-audio-separator, `mel_band_roformer_crowd_aufr33_viperx_sdr_8.7144.ckpt`, WAV output at 48 kHz. Stage stem scaled by 2.5726; audience = input − scaled stage stem.
- AudioSR 0.0.7, `basic` model, 50 DDIM steps, guidance scale 3.5, seed 42 + window index. Windows of 10.24 s with 0.64 s linear crossfades.
- Seam at 5.5 kHz: 8th-order Butterworth high-pass, zero-phase; low part = input − high-passed input. Level matched per window in 3.5 to 5.5 kHz (4th-order band-pass).
- Mix: audience −12 dB; from the start of the encore, a 5 s ramp to −6 dB.
- Compressor 1.8:1, threshold −26 dB, knee 6 dB, attack 30 ms, release 400 ms. Loudness −14 LUFS (dual mono). Limiter at 192 kHz, ceiling −1.4 dBFS, attack 5 ms, release 80 ms.
</details>

<script src="/js/blog-charts.js" defer></script>
