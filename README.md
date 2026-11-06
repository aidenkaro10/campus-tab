# Campus Tab

A new tab page in your university's colors. Pick your school once and the
whole page themes itself: clock, quick links, campus hours, a tab strip, and a
focus timer, over a wallpaper of your campus.

**[Try it live](https://aidenkaro10.github.io/campus-tab/?start)**

Works for **2,349 US universities**.

## What it does

| | |
|---|---|
| **Clock** | 12/24h, flip or digit styles, any corner |
| **Quick links** | Your school's portals. Curated for UF, editable for everyone |
| **Libraries** | Which libraries are open right now and until when |
| **Dining** | Which halls are open and what meal they're serving |
| **Tab strip** | Every open tab, click to switch |
| **Focus timer** | Pomodoro that keeps running with no tab open |
| **Wallpapers** | Themed gradients, real campus photos, or upload your own |

## How it works for any school

- The school list comes from a public dataset of US universities, built in.
  No backend, no API key, no cost per user.
- About 55 schools ship with their real brand color. Everyone else gets a
  neutral color they can change in 30 seconds.
- The first time you pick a school, it pulls 2 or 3 freely licensed campus
  photos from Wikipedia and saves them on your device, credited to the
  photographer.
- Library and dining hours only show for schools with real data. Made-up hours
  would send someone across campus to a locked door.

## Privacy

No backend, no analytics, no account. Everything you set lives on your own
machine. Full policy: [privacy.html](https://aidenkaro10.github.io/campus-tab/privacy.html)

## About this repo

This repo holds only the built site, published automatically. The source
(React, TypeScript, unit tests and real-browser tests) is in a private repo.

## Credit

Campus Tab is a fork of **Tiger Tab Basic** by **Juan Carlos Li Chen**
(Princeton '30), used with permission. The core architecture is his. This fork
added multi-school theming, the school picker, campus photos, Libraries and
Dining, the tab strip, and the web demo.
