---
doodle: volume
order: 4
---

{%- assign host = site.url | split: '://' | last | remove: '/' -%}
<div class="twitch-player">
  <iframe
    src="https://player.twitch.tv/?channel={{ site.twitch.username }}&parent={{ host }}&parent=localhost&parent=127.0.0.1&muted=true"
    title="{{ site.title }} live on Twitch"
    allowfullscreen
  ></iframe>
</div>

Stream offline? Past broadcasts and clips are on [twitch.tv/{{ site.twitch.username }}](https://www.twitch.tv/{{ site.twitch.username }}).
