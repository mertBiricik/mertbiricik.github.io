---
layout: post
title: "What 26,700 tracks look like to a machine: analysing my music library on a laptop GPU"
description: "I ran every track of my library through open-source audio models and fetched lyrics for all of them. What the data says about the library, where LRCLIB and Western-trained taggers fall short, and how it turned into 110 playlists."
date: 2026-10-19
translation: /blog/tr/muzik-kutuphanesi-analizi/
tags:
  - music
  - data
  - machine learning
---

{% include "blog/viz-style.html" %}

My music library is mostly Turkish, but not only. There is classical Turkish music from 78 rpm transfers onwards, folk singers with the bağlama, arabesk and Anatolian rock, and around them Persian and Arabic singers, 1980s synth-pop, country, opera, metal and game soundtracks. I had never seen it as a whole, only as a list of folders.

So I ran every track through open-source audio models on my laptop, fetched lyrics for all of them, and used the result twice: to describe the library, and to build playlists from it. No streaming service was involved; the only data that left the laptop were the lyrics lookups.

<div class="viz-tiles">
<div class="viz-tile"><p class="l">Tracks</p><p class="v">26,707</p><p class="d">in about 2,200 albums</p></div>
<div class="viz-tile"><p class="l">Music</p><p class="v">1,825 hours</p><p class="d">76 days end to end</p></div>
<div class="viz-tile"><p class="l">Size</p><p class="v">568 GB</p><p class="d">59% of tracks FLAC, 85% of bytes</p></div>
<div class="viz-tile"><p class="l">Distinct recordings</p><p class="v">23,687</p><p class="d">after merging duplicates</p></div>
<div class="viz-tile"><p class="l">Artists</p><p class="v">about 400</p><p class="d">20 of them fill half of the hours</p></div>
<div class="viz-tile"><p class="l">Tracks with lyrics</p><p class="v">15,231</p><p class="d">57%, in at least 10 languages</p></div>
</div>

## How the data was made

The analysis is done by [AudioMuse-AI](https://github.com/NeptuneHub/AudioMuse-AI), an open-source project that works next to a media server, here [Navidrome](https://www.navidrome.org/). Both run in Docker on a laptop with an RTX A5000 Laptop GPU (16 GB). For every track AudioMuse decodes the audio and runs two models:

- **MusiCNN**, a small network trained on tagged Western music. It gives a 200-value embedding and scores for 50 tags such as rock, jazz, folk or female vocalists.
- **CLAP**, trained on audio paired with text. It gives a 512-value embedding in the same space as text, so the library can be searched with a sentence. AudioMuse also uses it to score six moods: danceable, aggressive, happy, party, relaxed and sad.

With three workers in parallel the full run took 13 hours 23 minutes, about 33 tracks a minute. The models ran on the GPU; decoding stayed on the CPU, which was the real limit. AudioMuse also recognises identical recordings and merges them, so a song that appears on an album and on two compilations counts once.

Lyrics came from [LRCLIB](https://lrclib.net/), a free, community-run database of synced lyrics, saved as `.lrc` files next to each track. A few things I learned on the way, useful if you try the same:

- `/api/get` searches external sources when a track is not in the database and, under load, returns 503 most of the time. `/api/get-cached` only looks in the database and answers at once. Ask that first.
- `/api/search` often answers 503 with `Retry-After: 1`. Waiting exactly that second and retrying, instead of an exponential backoff, took my script from 2 to about 25 tracks a minute.
- Accept a result only if title and artist match after normalisation and the duration is within 2 seconds. Synced lyrics belong to one recording; a live version or a remix of the same song needs different timestamps.
- Check your own tags first. 843 of my misses had no artist tag or had the file name as the title, so the search was for `[Unknown Artist]` or `07. Ceza - Kolay Gelsin`. Retrying with the folder name as the artist found lyrics for almost half of them.

To compare lyrics, AudioMuse turns them into a vector with the GTE multilingual base model. It ships an int8 version and pins it to the CPU. I compared the available versions on 40 lyrics from the library:

| Version | Time per track | Cosine similarity to fp32 (mean / lowest) |
|---|---:|---:|
| int8, CPU (bundled) | 85 to 102 ms | 0.949 / 0.891 |
| fp16, GPU | 7 to 8 ms | 0.957 / 0.912 |
| fp32, GPU | 8 to 11 ms | 1.000 / 1.000 |

Both the bundled int8 model and fp16 move the vectors noticeably away from fp32, and fp32 on a GPU is just as fast, so I used fp32.

## What is in the library

To describe the library I needed groups that mean something for this music. Tag-based genres do not work here (more on that below), so I grouped by sound: k-means on the combined CLAP and MusiCNN embeddings gave 60 clusters, and I sorted those by hand into nine families by looking at the artists in each.

<figure class="viz-figure">
{% include "blog/music-library/families.svg" %}
{% include "blog/music-library/families-m.svg" %}
<figcaption>Figure 1. Hours of music per family. Hover or tap a bar for the number of tracks.</figcaption>
</figure>

Classical Turkish music is the largest family by hours, but it has fewer tracks than pop: a sanat müziği recording often runs six or seven minutes, a remix of a dance hit three. The extreme case is Kani Karaca, a hafız whose 173 recordings of hymns and recitations add up to 78 hours, an average of 27 minutes each.

<figure class="viz-figure">
{% include "blog/music-library/artists.svg" %}
{% include "blog/music-library/artists-m.svg" %}
<figcaption>Figure 2. The 20 artists with the most hours, coloured by the family most of their tracks fall into.</figcaption>
</figure>

Zeki Müren alone is 110 hours, 6% of the whole library. Inna is second, mostly because of remixes: 1,270 tracks for an artist with a few hundred songs.

<figure class="viz-figure">
{% include "blog/music-library/decades.svg" %}
{% include "blog/music-library/decades-m.svg" %}
<figcaption>Figure 3. Tracks by decade of the album's release year as written in the tags, coloured by family.</figcaption>
</figure>

This chart says more about how music is published than about when it was recorded. Only 34 tracks are tagged before 1950, although a large part of the classical Turkish collection was recorded on 78 rpm records in the 1930s to 1950s. Those recordings reached me through CD and digital reissues, so their year is the reissue year: the median year of the classical Turkish family is 2004. The 2010s peak is the same effect plus actual new music, deluxe editions and remix albums. If you want the recording date of old music, the tags are not the place to look.

### A map of the library

The embeddings have 712 dimensions. UMAP squeezes them into two so that recordings that sound alike end up close together. Every dot is one recording, coloured by family; the labels mark some of the 60 clusters.

<figure class="viz-figure">
<img src="/assets/blog/music-library/map.webp" alt="A scatter plot of 23,689 recordings. Classical Turkish music in blue fills the left side, with Turkish folk in green next to it. Turkish song and arabesk in orange and Middle Eastern pop in magenta sit in the middle. Pop, synth-pop and hip-hop in purple fill the upper right, with rap as a separate island at the top. Country and chanson in yellow are at the bottom middle, game scores in teal at the lower right, and Wagner and opera form a separate island at the very bottom." width="1360" height="960" loading="lazy">
<figcaption>Figure 4. UMAP projection of the combined CLAP and MusiCNN embeddings. Distances between distant groups are not meaningful in UMAP; neighbourhoods are.</figcaption>
</figure>

The map runs roughly from old to new and from acoustic to electronic. Classical Turkish music fills the left, and its far edge is a cluster where Münir Nurettin Selçuk sits next to 1920s American bands and singers (Fletcher Henderson, Eddie Cantor) and the old records from the BioShock soundtrack. What they share is the sound of shellac, not the music. Folk is next to it, arabesk and Middle Eastern pop in the middle, pop and synth-pop on the right. Two groups are islands of their own: rap at the top, and Wagner with the Vienna Philharmonic at the bottom. Nothing else in the library sounds like an orchestra playing *Götterdämmerung*.

## Lyrics: who is covered and in which language

LRCLIB is excellent for some music and nearly empty for other music. Broken down by family, the difference is large:

<figure class="viz-figure">
{% include "blog/music-library/lyrics-coverage.svg" %}
{% include "blog/music-library/lyrics-coverage-m.svg" %}
<figcaption>Figure 5. Result of the first lyrics pass per family. "Instrumental" means LRCLIB has the track marked as having no vocals.</figcaption>
</figure>

Three out of four country, chanson and songwriter tracks have lyrics, most of them synced. For classical Turkish music it is one in six, for folk one in three. In the first pass 12,713 tracks got an `.lrc` file, and a second pass over the misses, with cleaned-up names and plain lyrics allowed for remixes and live versions, finds about one more in four. The old Turkish repertoire is largely missing from it.

<figure class="viz-figure">
{% include "blog/music-library/languages.svg" %}
{% include "blog/music-library/languages-m.svg" %}
<figcaption>Figure 6. Language of the lyrics, detected from the script and from common short words. Approximate: a German song with an English chorus counts as one of the two.</figcaption>
</figure>

Turkish and English make up 86% of the tracks that have lyrics. Persian is almost entirely Googoosh, Arabic mostly Nancy Ajram and Fairuz, Hebrew mostly Ninet Tayeb. Most of the Spanish is Inna, who recorded a whole Spanish album.

## What the models hear

MusiCNN was trained on tags from Last.fm users, mostly for Western music. For every track I took its highest-scoring tag:

<figure class="viz-figure">
{% include "blog/music-library/musicnn-tags.svg" %}
{% include "blog/music-library/musicnn-tags-m.svg" %}
<figcaption>Figure 7. MusiCNN's top tag for each track, by family. Related tags are grouped, for example 80s with electronic and dance.</figcaption>
</figure>

Where the music is Western, the tags are fine: rock is rock, country is country, scores are ambient. Where it is not, the model reaches for the nearest thing it knows. Turkish song and arabesk is "rock" for almost half of its tracks. Classical Turkish music is jazz or rock for one track in five each, and blues for one in six. Folk does get "folk", but only for two tracks in five. None of this is wrong in the model's own terms, it just has no word for makam. This matters for any tool that names or samples playlists by these tags, and AudioMuse does both, which is why its own playlists for this library ended up called `Rock_Pop_Electronic_Medium_Happy_Party`.

The mood scores come from CLAP instead. They all sit in a narrow range, so the chart shows how far each family is from the library average, in standard deviations:

<figure class="viz-figure">
{% include "blog/music-library/moods.svg" %}
{% include "blog/music-library/moods-m.svg" %}
<figcaption>Figure 8. Average mood score per family, as standard deviations from the library mean. Hover or tap a cell for the exact value.</figcaption>
</figure>

Most of it is what you would expect, which is a good sign: pop is the most danceable and party-like, scores are the least happy, the psychedelic and world group is the most relaxed. Two results I did not expect. Country and chanson come out as the saddest family, ahead of arabesk, whose reputation is built on sadness. And Turkish folk is the least relaxed family in the library. A likely reason for the second: a lot of it is a single voice and a bağlama played hard, close to the microphone.

I left the key estimates out. The analysis reports a key and major or minor for every track, but makam music is not built on major and minor scales, so for half of this library the answer would be forced.

## From the data to playlists

AudioMuse builds playlists by clustering a sample of the library and keeping the best-scoring clusters. That is a fine way to suggest a few playlists, but it does not cover a library: asking for 50 playlists gave 1,871 songs out of 23,687. With the genre problem on top, I made the playlists from the same 60 clusters as above:

- For each cluster, the recordings sorted by distance to the centre, so the most typical ones come first; at most 8 songs per artist, at most 100 songs, and the same song from another album is skipped.
- Artist radios for the 30 artists with the most tracks: the average of all their vectors, then the closest recordings, at most 15 from the artist and 5 from anyone else. The Cem Karaca radio brings in Erkin Koray, Moğollar and David Bowie, the Googoosh radio Nesrin Sipahi, Fairuz and Nilüfer.
- 20 themes written as English sentences for CLAP. "1980s synthpop with analog synthesizers" returns OMD, The Human League and Münchener Freiheit. "Sad turkish arabesque with string orchestra" returned film scores by Abel Korzeniowski and Inon Zur: strings and sadness, but none of the arabesk in the library. CLAP has the same blind spot as MusiCNN.

Each playlist is an `.m3u8` file in a folder at the root of the library, with paths relative to that folder (`../Artist/Album/track.flac`), so the same files work on the laptop and on the phone's copy of the library. A short script gives each one a cover made from its four most frequent albums.

<img src="/assets/blog/music-library/covers.webp" alt="Twelve playlist covers in a grid. Each is a collage of four album covers with a coloured label and the playlist name: clusters such as Anadolu Rock, Türkü ve Âşıklar, Rap ve Hip-Hop, Opera ve Klasik, Metal and 80'ler Synth-pop; artist radios for Googoosh, Johnny Cash and Fairuz; and themes such as Psikedelik Doğu, Taş Plak Sesi and Ud ve Kanun." width="1408" height="1056" loading="lazy">

The names are Turkish because the library is: Küme is cluster, Radyo radio and Tema theme. Lyrics are not used in these playlists yet. The lyrics vectors mostly encode language and subject, so they will get their own set, grouped by language and by topic.

<details class="data">
<summary>All settings</summary>

- AudioMuse-AI 3.6.4 (`latest-nvidia` image), Navidrome 0.64.2, PostgreSQL 15; three analysis workers; ONNX Runtime with the CUDA provider; Whisper off.
- Analysis: 26,705 files, 48,203 s; 23,687 distinct recordings.
- LRCLIB: `/api/get-cached` with title, artist, album and rounded duration, then `/api/search` with the title without parentheses for the track artist and the album artist. Accepted if normalised title and artist match and the duration differs by at most 2 s; synced lyrics preferred. Three threads, honouring `Retry-After`.
- Lyrics vectors: GTE multilingual base, fp32 ONNX export from onnx-community on Hugging Face, first-token pooling, unit length, at most 512 tokens.
- Clusters: CLAP (512) and 0.7 × MusiCNN (200), each mean-centred and scaled to unit length; RAPIDS cuML KMeans, k = 60, 5 initialisations. Families assigned to clusters by hand.
- Map: cuML UMAP, cosine metric, 30 neighbours, minimum distance 0.25, same vectors.
- Moods: AudioMuse's CLAP-based scores; family mean minus library mean, divided by the library standard deviation.
- Languages: Arabic, Hebrew, Cyrillic and Greek script by character ranges, Persian against Arabic by letters such as پ, چ, گ and ی; Latin-script languages by counting frequent short words; at least 40 letters and 5 matches.
- Years: album year tag, otherwise the year in the folder name.
</details>

<script src="/js/blog-charts.js" defer></script>
