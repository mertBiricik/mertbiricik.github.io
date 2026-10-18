---
layout: post
title: "Restoring a phone recording of the National Arab Orchestra in Istanbul"
description: "How I turned a muffled two-hour phone recording into a 17-track live album, using the orchestra's own studio release as a reference."
date: 2026-10-18
tags:
  - audio
  - signal processing
  - music
---

{% include "blog/viz-style.html" %}

On 27 September 2026, during its first visit to Turkey, the National Arab Orchestra played at the opera hall of the Atatürk Kültür Merkezi in Istanbul as part of the Kültür Yolu Festivali. Michael Ibrahim conducted, and the soloists were Nai Barghouti, Usama Baalbaki and, as a guest, the kanun player Aytaç Doğan.

I recorded the whole evening on my phone: 2 hours 10 minutes of mono AAC at 48 kHz and 288 kbps. When I played it back at home it was clearly the concert, but it sounded like it was coming from the next room. This post is about how I turned that file into a 17-track live album. Everything here is ordinary signal processing: measuring, one carefully chosen filter, level control and a lot of cutting.

## What was wrong with it

Before changing anything I measured the file.

The good news was that the recording was not damaged. The level was healthy, the hall was quiet while the orchestra played, and only 1,456 samples in more than two hours touched full scale, almost all of them inside applause. The first 14 minutes were the audience finding their seats, which would simply be cut.

The bad news was the tone. Compared with a normal orchestral recording, everything from about 1 kHz upward was too quiet, by 7 dB at 2 kHz, 10 dB at 4 kHz and 12 dB at 5 kHz. Above about 6.5 kHz there was nothing left at all, only the noise floor. My best guess is that the phone was in a pocket or a bag for most of the concert and the fabric ate the high frequencies.

One false alarm on the way: in the first spectrogram I made, there seemed to be a steady line around 1.2 kHz running through the whole recording, and I was ready to notch out a whistle. Tracking the strongest narrow peaks minute by minute showed that the only "constant tones" were at 73, 98, 294 and 392 Hz, which are D and G, the tonal centres of most of the pieces that night. The 1.2 kHz line wandered from minute to minute. It was music, not interference, and there was nothing to remove.

## A reference from the orchestra itself

To fix the tone I needed to know what the recording should sound like. The opening piece of the concert was *Wa'id (Promise)*, a composition by Michael Ibrahim in the samai form, and the orchestra released a studio version of it in 2025. The same piece played by the same orchestra is about as good a reference as you can get: the instruments, the arrangement and the melodic range are the same, so any difference in the average spectrum mostly comes from the recording chain, not from the music.

For both versions I computed the long-term average spectrum (Welch's method, 8192-point FFT at 48 kHz) over the loudest 60% of two-second blocks, so that pauses and applause would not pull the average down. I then set both curves to 0 dB at 200 to 400 Hz so that only their shape is compared.

<figure class="viz-figure">
{% include "blog/nao-istanbul/spektrum-sorun.svg" %}
{% include "blog/nao-istanbul/spektrum-sorun-m.svg" %}
<figcaption>Figure 1. Average spectrum of <em>Wa'id</em>, from my phone and from the orchestra's studio release. Both are set to 0 dB at 200 to 400 Hz. Hover, tap or use the arrow keys for values.</figcaption>
</figure>

Below 1 kHz the two curves agree within a few dB. Above it the phone falls away faster and faster, and above 6.5 kHz it flattens out at the noise floor while the studio recording carries on.

The difference between the two curves is the correction. I smoothed it to one-octave resolution, so that it follows the broad loss of the recording chain and not individual notes. As a cross-check I repeated the measurement with the orchestra's 2023 concert at the Kennedy Center's Millennium Stage against the whole of my recording, and got almost the same curve; the final correction is the average of the two. Then three limits:

- no more than +12 dB anywhere;
- no more than +6 dB below 90 Hz, where boosting mostly brings up handling noise and rumble;
- above 5.5 kHz the correction fades to zero at 7.5 kHz. There is no music up there to bring back, so boosting it would only make the hiss louder.

<figure class="viz-figure">
{% include "blog/nao-istanbul/duzeltme.svg" %}
{% include "blog/nao-istanbul/duzeltme-m.svg" %}
<figcaption>Figure 2. The correction applied to the whole concert: about +5 dB at 1 kHz, +8 dB between 1.5 and 3 kHz, +10 to +12 dB at 4 to 5.5 kHz, then back to zero.</figcaption>
</figure>

I applied it as a linear-phase FIR filter with 8191 taps, together with a 30 Hz high-pass, over the entire recording. A linear-phase filter shifts all frequencies by the same delay, so after removing that delay the corrected file lines up sample for sample with the original.

<figure class="viz-figure">
{% include "blog/nao-istanbul/spektrum-sonuc.svg" %}
{% include "blog/nao-istanbul/spektrum-sonuc-m.svg" %}
<figcaption>Figure 3. The same measurement after the correction. Up to about 5.5 kHz the corrected recording now follows the studio release. Above that it cannot, because nothing was recorded there.</figcaption>
</figure>

<details class="data">
<summary>Data table for figures 1 to 3</summary>

{% include "blog/nao-istanbul/tablo-spektrum.md" %}
</details>

## Level

The second change was level. I used gentle compression (1.8:1 above −26 dB, 30 ms attack, 400 ms release) to bring the quiet passages a little closer to the loud ones, set the integrated loudness to −14 LUFS and put a limiter on the peaks, which in practice only touches the applause. The file is mono and plays on two speakers, so loudness is measured as dual mono.

<div class="viz-tiles">
<div class="viz-tile"><p class="l">Integrated loudness</p><p class="v">−14.1 LUFS</p><p class="d">from −15.5 LUFS</p></div>
<div class="viz-tile"><p class="l">Loudness range</p><p class="v">7.3 LU</p><p class="d">from 9.5 LU</p></div>
<div class="viz-tile"><p class="l">True peak</p><p class="v">−0.6 dBTP</p><p class="d">from +2.6 dBTP</p></div>
</div>

The original file was not very quiet to begin with; the bigger change is in the peaks. The phone's AAC decoder produces true peaks up to 2.6 dB over full scale, which can click on some playback chains. After limiting they stay below 0 dBTP, and the loudness range drops only from 9.5 to 7.3 LU, so the orchestra still breathes.

## Finding the songs

A two-hour file is not an album. I needed track boundaries and, where possible, titles. Four sources helped.

**Audience videos on YouTube.** Other people in the hall had uploaded clips, and I had already downloaded eleven of them. I located each one inside my recording with GCC-PHAT, a cross-correlation that whitens the spectrum so two different phones in two different seats still line up. Each clip was tested with three 20-second pieces; when at least two of them pointed to the same offset, the clip was found. Nine of the eleven matched, which gave me *Wahashtini*, *Shuruq*, *Kaybolan Yıllar*, *Alışamadım* and *Ah İstanbul*. The other two, *Alf Leila wa Leila* and *Li Beirut*, matched nothing, and their descriptions explained why: they were filmed at the second Istanbul concert on 28 September.

**Speech recognition for the stage announcements.** Whisper did well on the conductor's English: the welcome, the introductions ("our first singer for the evening, the NAO's very own co-founder", Usama Baalbaki; Nai Barghouti "all the way from Palestine"; and for Aytaç Doğan "the most brilliant kanun player", which it heard as "combo player") and the thank-yous at the end. On sung Arabic recorded from the audience it was useless. It filled the gaps with the boilerplate it learned from subtitled YouTube videos, "subscribe to the channel" and "subtitles by" in several languages.

**Audience versus stage.** I also separated the audience sound (applause, clapping along, talking) from the stage sound with a source-separation model and compared the two levels second by second. (More about that model in [part 2](/blog/nao-istanbul-ai-version/).) That gave a clean map of where each piece ends and the applause begins.

**Melody matching for the encore.** The last piece had no video from my night. Later I found a 47-second clip from the second night titled *Kara Köprü Narlıktır*. Since it was a different performance, exact alignment was impossible, so I compared melodies instead: 24-bin chroma features (quarter-tone resolution, which Arabic music needs), slid along the whole recording while allowing the tempo to differ by −20% to +30%. The whole clip and each of its halves landed between 127:25 and 129:45, all inside the final four minutes.

The cutting rule was simple: applause belongs to the piece it follows, and spoken introductions go at the start of the piece they introduce. Long speeches got their own tracks.

<figure class="viz-figure">
{% include "blog/nao-istanbul/zaman.svg" %}
{% include "blog/nao-istanbul/zaman-m.svg" %}
<figcaption>Figure 4. The recording from start to finish. Blue segments are the songs of the album, grey ones are speech, and the light block at the start was cut. Orange bars show where the YouTube clips from the same night were found. Triangles mark the edits described below. Hover, tap or tab through the segments for details.</figcaption>
</figure>

## Cleaning up

Besides the 14 minutes before the concert, there were two places where we were talking in our seats during applause, at 89:40 and 101:42. Each was about 16 to 18 seconds long, and each sat right next to a stretch of clean applause of the same length, so I replaced the talking with that applause, with short crossfades. The last few seconds of the file, where I start speaking again, are faded out.

One thing stayed in. In *Şaşkın*, during a short break in the music, someone near me shouts an Arabic word of praise, something like "teslem yâ…" ("bless you"). It is the kind of response the conductor had asked for at the beginning of the concert, in the tradition of *tarab*. I tried turning it down and patching it with the quiet moment before it, and both versions sounded worse than the shout.

## Before and after

All clips below are 20 seconds long and matched to the same loudness, so the louder one does not win by default.

<div class="ab">
<div><p><em>Wa'id</em>, phone recording</p><audio controls preload="none" src="/assets/blog/nao-istanbul/waid-once.mp3"></audio></div>
<div><p><em>Wa'id</em>, corrected</p><audio controls preload="none" src="/assets/blog/nao-istanbul/waid-sonra.mp3"></audio></div>
<div><p><em>Ah İstanbul</em>, phone recording</p><audio controls preload="none" src="/assets/blog/nao-istanbul/ah-istanbul-once.mp3"></audio></div>
<div><p><em>Ah İstanbul</em>, corrected</p><audio controls preload="none" src="/assets/blog/nao-istanbul/ah-istanbul-sonra.mp3"></audio></div>
</div>

<figure class="viz-figure">
<img src="/assets/blog/nao-istanbul/spektrogram-waid.webp" alt="Two spectrograms of the same 20 seconds of Wa'id. In the corrected version the band between 1 and 6 kHz is clearly stronger; above about 7 kHz both are empty." width="1360" height="919" loading="lazy">
<figcaption>Figure 5. The first clip as spectrograms, on the same colour scale. The correction strengthens 1 to 6 kHz; above 7 kHz both versions are empty.</figcaption>
</figure>

What the correction cannot do: it cannot bring back what was never recorded. There is still nothing above about 7 kHz, so cymbals and the air of the hall stay dull, and the recording is still mono. The result sounds like a decent broadcast from an old radio, which is a long way from where it started.

## The album

Seventeen tracks, 1 hour 56 minutes. Four titles are still unknown to me; if you were there and recognise them, please write to me.

| # | Title | Performer | Length |
|---|---|---|---|
| 1 | Wa'id (Promise) | National Arab Orchestra, Michael Ibrahim | 14:17 |
| 2 | Michael Ibrahim speaks | | 2:50 |
| 3 | Untitled 1 | Usama Baalbaki | 6:51 |
| 4 | Lamma Bada Yatathanna | Nai Barghouti | 11:11 |
| 5 | Nai Barghouti speaks | | 2:04 |
| 6 | Wahashtini | Nai Barghouti | 12:40 |
| 7 | Untitled 2 (a Fairuz song) | Nai Barghouti | 4:23 |
| 8 | Untitled 3 | | 4:11 |
| 9 | Shuruq | National Arab Orchestra | 10:17 |
| 10 | Şaşkın & Al-Ain Mulayitain | National Arab Orchestra | 5:47 |
| 11 | Kaybolan Yıllar | Aytaç Doğan | 7:49 |
| 12 | Alışamadım | Aytaç Doğan | 5:26 |
| 13 | Ah İstanbul | Nai Barghouti, Aytaç Doğan | 9:28 |
| 14 | Hicaz Mandıra | Nai Barghouti | 7:08 |
| 15 | Untitled 4 | | 5:37 |
| 16 | Thank-yous | Michael Ibrahim | 1:43 |
| 17 | Kara Köprü Narlıktır (encore) | National Arab Orchestra, Michael Ibrahim | 4:04 |

The album is in this folder as 24-bit / 48 kHz FLAC: [National Arab Orchestra, Istanbul, 27 September 2026](https://drive.google.com/drive/folders/11axoT7418hRC7uaDNmyZEMNJMvklUEwp?usp=sharing).

[Part 2](/blog/nao-istanbul-ai-version/) is about a second version of the album, made with two machine-learning models. That version is [in its own folder](https://drive.google.com/drive/folders/1a15W28hYTbNU7IOg28BXUjRLDtF38XYC?usp=sharing).

This is an audience recording made for personal listening. The music belongs to the National Arab Orchestra, the soloists and the composers. If any of them would like it taken down, email me and I will remove it.

<script src="/js/blog-charts.js" defer></script>
