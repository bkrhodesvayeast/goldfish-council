# The Goldfish Council — Breeders' Sale Page

A static 3-page site: a landing page, a goldfish video gallery, and an about page. No backend, no build step — just HTML/CSS/JS, deployable straight to GitHub Pages.

## Pages

- `index.html` — landing page. Nav bar + full-bleed ocean background hero with an "Enter Video Gallery" button.
- `videos.html` — the goldfish video gallery (search + cards with click-to-play YouTube previews).
- `about.html` — About / Our Fish page. Edit the placeholder paragraphs with your own bio, breeding info, and contact details.

## Other files

- `style.css` — all styling (shared header/nav, hero, cards).
- `videos-data.js` — **your video content lives here**.
- `app.js` — renders cards from `videos-data.js`, handles search and click-to-play.
- `images/background.jpg` — the ocean background image (`background.png` is the original, kept as a backup).

## Adding a new goldfish video

Open `videos-data.js` and add an entry to the `VIDEOS` array:

```js
{
  youtubeId: "dQw4w9WgXcQ",
  goldfishName: "Bubbles",
  title: "Bubbles doing a lap around the tank",
  description: "Bubbles is a 3-year-old fantail goldfish who loves swimming through the castle decoration.",
  date: "2026-07-04",
  aquabidUrl: "https://www.aquabid.com/cgi-bin/auction/goldfish/view.cgi?your-listing-id-here"
}
```

- `youtubeId` is the part of the video URL after `v=` (e.g. `youtube.com/watch?v=XXXXXXXXXXX`).
- `aquabidUrl` is optional — paste a live AquaBid listing URL and a "View on AquaBid" button appears on that card. Delete the line entirely for fish with no active auction.
- Entries are sorted newest-first automatically by `date`.
- Save the file and push — that's the entire publishing step.

## Editing the About page

Open `about.html` and replace the placeholder paragraphs inside the three `.about-card` blocks (About, Our Fish, Contact) with your own text. No other file needs to change.

## Editing the nav or site name

The site name ("The Goldfish Council"), tagline ("Breeders' Sale Page"), and nav links appear at the top of all three HTML files inside `<header class="site-header">`. Update the text in all three files if you rename anything, and add `class="active"` to whichever link matches the current page.

## Branding note

The look (crimson red `#cc0200`, cream `#fff4e2`, italic serif headlines, bold red nav links, circular logo badge) is styled after thegoldfishcouncil.org, a real nonprofit goldfish fanciers' organization that also uses the name "The Goldfish Council." The logo here is an original emblem, not a copy of theirs, but since the name is identical it's worth double-checking there's no confusion with the nonprofit before this goes live publicly — especially if this page is for commercial sales.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (or reuse an existing Pages repo).
2. Push all files, including the `images/` folder, to the repo root (or to a `/docs` folder — your choice).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set Source to "Deploy from a branch," pick your branch and the root (or `/docs`) folder, save.
5. GitHub gives you a URL like `https://yourusername.github.io/repo-name/` within a minute or two.

From then on, publishing a new goldfish video is: edit `videos-data.js` → commit → push. No rebuild, no server.

## Notes on the "preview" behavior

Each card on the videos page shows the video's real YouTube thumbnail. Clicking it swaps in a live embedded YouTube player that autoplays — so visitors get an instant visual preview without a page load, and can watch in place without leaving the site.

## Possible upgrades later

- Swap `videos-data.js` for a Jekyll `_data/videos.yml` file if you want to manage entries as a collection instead of a JS array — same site, no visual changes needed.
- Add tags/categories (breed, tank size, etc.) if the collection grows and search-by-text isn't enough.
- If you ever want *other people* to submit videos without you manually editing the file, that requires either GitHub Issues/PRs as a submission form, or a small backend/service (e.g. a free form tool writing to a spreadsheet) — GitHub Pages itself can't accept public writes since it only serves static files.
