---
# Sample post from the design mockup. Drafts only build with `--drafts`.
title: "Streampad: A Clean Control Panel for streamer.bot"
date: 2026-09-12 10:00:00 -0500
categories: [Projects]
tags: [streamer.bot, widget, release]
description: >-
  Streampad is a lightweight, customizable control panel for streamer.bot. Build buttons,
  triggers, and pages with ease, and keep your stream tools close at hand.
---

Streampad puts your streamer.bot actions on one screen. Each button runs an action, each page groups the buttons for a segment of the stream, and the whole layout lives in a single file you can back up or share.

## What it does

- Runs any streamer.bot action with one tap
- Groups buttons into pages, one per part of the show
- Works in a browser tab, a phone, or an OBS dock

## Setup

1. Import the Streampad actions into streamer.bot.
2. Open `streampad.html` in a browser or add it as a custom dock.
3. Point it at your streamer.bot WebSocket server.

> Streampad talks to streamer.bot over its local WebSocket server, so it needs to run on the same network as your streaming PC.
{: .prompt-info }
