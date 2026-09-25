---
# Sample post from the design mockup. Drafts only build with `--drafts`.
title: "Overlay Notifier Widget (v1.2.0)"
date: 2026-09-05 10:00:00 -0500
categories: [Widgets]
tags: [widget, overlay, release notes]
description: >-
  A simple, highly customizable notification widget for your stream. Now with more animations,
  sound control, and theme options.
---

Version 1.2.0 of the Overlay Notifier adds new entrance animations, per-alert volume, and a theme file so you can match your overlay without touching the code.

## Changes

| Area       | What changed                                 |
| ---------- | -------------------------------------------- |
| Animations | Three new entrance styles and a slower exit  |
| Sound      | Volume per alert type, plus a global mute    |
| Themes     | Colors and fonts moved into `theme.json`     |

## Upgrading

Replace the widget folder and keep your old `settings.json`. New settings fall back to their defaults.

> Clear the browser source cache in OBS after upgrading, or the old script can stick around.
{: .prompt-warning }
