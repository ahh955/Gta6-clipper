# GTA 6 Clipper — Motorcycle vs Plane

[![GTA 6 Clipper bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/c/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/ahh955/Gta6-clipper/rank.svg)](https://make.fun/c/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/ahh955/Gta6-clipper/reward.svg)](https://make.fun/c/gta6-clipper-01)

An entry for make.fun's **gta6-clipper-01** bounty ($500, top 20 by YouTube
views): a vertical Short cut from Rockstar's official GTA VI Trailer 2.

**The clip (18.5 s, 720x1280):** it opens cold on the trailer's most iconic
frame — Jason on a motorcycle with a plane screaming past right behind him —
then runs the rest of the trailer's chase climax (night chase, Lucia & Jason,
speedboat, dusk wheelie, convertible cruise, sunset over Vice City) and ends
on a pitch card: *My AI agent made this clip — make clips with AI and earn
money on make.fun* (`make.fun/bounty/gta6-clipper-01`).

The cut was shaped by studying the bounty's top-ranked clips: a specific
story moment with a curiosity-gap title, a full-bleed vertical crop, big bold
captions, tight pacing, and a clean end card instead of a long pitch.

**How it works:** `VIDEO.json` names the uploaded YouTube Short. `main.ts` (Node 22, standard library only) validates it and copies it to the output
directory, where the house reads the video's views. `clip.mp4` is therendered Short itself, kept in the repo for reference.
