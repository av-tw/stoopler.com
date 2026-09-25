---
# Sample post from the design mockup. Drafts only build with `--drafts`.
title: "Getting Started with streamer.bot (A Simple Guide)"
date: 2026-08-28 10:00:00 -0500
categories: [Guides]
tags: [guide, streamer.bot, getting started]
description: >-
  New to streamer.bot? Here's a straightforward guide to get you set up, with tips, resources,
  and a few of my favorite workflows.
---

streamer.bot is a free Windows app that reacts to things happening on stream, like follows, redeems, and chat commands, and runs actions in response. This guide gets you from download to a first working command.

## Install

Download the latest release from [streamer.bot](https://streamer.bot), unzip it somewhere permanent, and run it. There is no installer, so the folder you pick is where your settings live.

## Connect your accounts

Open the **Platforms** tab and sign in with your broadcaster account. A second bot account is optional but keeps chat messages from coming from you.

## Your first action

Create an action, add a trigger for a chat command, and give it a sub-action. For anything more involved, the C# sub-action is where the fun starts:

```csharp
using System;

public class CPHInline
{
    public bool Execute()
    {
        CPH.SendMessage("Stapler online.");
        return true;
    }
}
```

> Keep a backup of the `data` folder before big experiments. It holds every action you have built.
{: .prompt-tip }

### Where to go next

Grab one of the [widgets](/widgets/) and read through its actions. Seeing how someone else wired things up is the fastest way to learn.
