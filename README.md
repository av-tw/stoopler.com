# stoopler.com

Stoopler's site: a [Jekyll](https://jekyllrb.com) blog on the [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) theme gem, restyled with the Stoopler brand.

## Run it locally

With Ruby 3.1 to 3.4 (Chirpy 7.6 does not support Ruby 4) and Bundler:

```sh
bundle install
bundle exec jekyll serve --drafts   # http://127.0.0.1:4000
bash tools/test.sh                  # production build + html-proofer, same as CI
```

Without a local Ruby, the same thing through Docker:

```sh
docker run --rm -it -p 4000:4000 --user "$(id -u):$(id -g)" -e HOME=/tmp \
  -e BUNDLE_PATH=/site/vendor/bundle -v "$PWD":/site -w /site ruby:3.4 \
  bash -c "bundle install && bundle exec jekyll serve --drafts -H 0.0.0.0"
```

## Writing

- Posts go in `_posts/YYYY-MM-DD-title.md`. See Chirpy's [writing guide](https://chirpy.cotes.page/posts/write-a-new-post/) for front matter.
- `categories: [Widgets]` or `categories: [Projects]` puts a post on the Widgets or Projects page.
- `description:` becomes the summary on the post list.
- `_drafts/` holds sample posts from the design mockup. They only build with `--drafts` and never deploy.

## Where the Stoopler layer lives

Everything not listed here comes from the Chirpy gem.

| Path | What it does |
| --- | --- |
| `_sass/stoopler/` | Brand tokens (light and dark), sidebar, topbar, post list, 404 |
| `assets/css/jekyll-theme-chirpy.scss` | Chirpy's stylesheet entry, with font and size settings, plus the brand layer |
| `_includes/sidebar.html` | Memo-pad sidebar with doodle nav icons and the Twitch link |
| `_includes/footer.html` | Footer links and the light/dark/system toggle |
| `_includes/post-list.html`, `post-list-empty.html` | Date-rail post list and its empty state |
| `_includes/metadata-hook.html`, `assets/js/search-shortcut.js` | Cmd/Ctrl+K to focus search |
| `_layouts/home.html`, `_layouts/listing.html` | Home page and the Widgets/Projects tabs |
| `_tabs/` | Sidebar pages. `doodle:` picks an icon from `assets/img/brand/doodles/`; `sidebar: false` hides a page from the nav |
| `_data/locales/en.yml` | Tab labels and a few UI strings. Every new tab needs a `tabs.<file name>:` entry here, or its page title comes out blank |
| `_data/origin/cors.yml` | Swaps Chirpy's web fonts for IBM Plex |
| `assets/404.html` | The blue-screen 404 |
| `assets/img/brand/`, `assets/img/favicons/` | Logo, mascot, doodles, social preview, favicons, web manifest |

These files replace Chirpy 7.6 files of the same name and started as copies of them: `_includes/sidebar.html`, `_includes/footer.html`, `_includes/js-selector.html`, `_includes/metadata-hook.html`, `_layouts/home.html`, `_layouts/archives.html`, `assets/404.html`, `assets/css/jekyll-theme-chirpy.scss`, and `assets/img/favicons/`. The Gemfile pins Chirpy to 7.6.x for that reason. Before moving to a newer Chirpy, compare those files with the new upstream versions.

## Deploy

`.github/workflows/pages-deploy.yml` builds and deploys to GitHub Pages on every push to `main`. In the repository settings, set **Pages → Source** to **GitHub Actions** and set the custom domain to `stoopler.com`, which must match `url:` in `_config.yml`. Make sure the domain redirects to HTTPS, either with GitHub's "Enforce HTTPS" or at your DNS proxy. The Twitch player on the Live page only loads over HTTPS.
