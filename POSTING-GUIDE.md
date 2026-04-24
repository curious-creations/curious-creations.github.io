# Posting Guide — How to add new content

Once your blog is live, adding a new post is a 2-minute job. Everything happens in your browser at github.com. You don't need to install anything.

---

## The mental model

Your blog is just **three kinds of files** in the GitHub repo:

- `posts.json` — the list of every post (title, date, text, attachments). **This is the only file you edit for every new post.**
- `media/` — a folder with your MP3s, PDFs, MP4s. **Drag files here when you want to attach them.**
- Everything else (`index.html`, `style.css`, `app.js`) — leave alone. These make the blog work.

GitHub detects changes automatically and rebuilds your site within 1–2 minutes.

---

## Adding a text-only post

1. Go to your repo on github.com.
2. Click on `posts.json` in the file list.
3. Click the pencil icon ✏️ in the top-right to edit.
4. Add a new post **at the top of the list** (inside the `[` bracket). Copy this template:

```json
{
  "title": "My new post",
  "date": "2026-04-25",
  "body": "Write your post here.\n\nLeave a blank line for a new paragraph. You can use **bold**, *italic*, and [links](https://example.com)."
},
```

5. Make sure there's a comma `,` between every post (except after the last one).
6. Scroll down, click **Commit changes**. Done.

---

## Adding an audio (MP3) post

1. Go to the `media` folder in your repo.
2. Click **Add file** → **Upload files**. Drag your MP3 in. Commit.
3. Edit `posts.json` and add:

```json
{
  "title": "Episode 3: My audio post",
  "date": "2026-04-25",
  "body": "Description of the episode.",
  "attachments": [
    { "type": "audio", "title": "Episode 3", "url": "media/my-episode.mp3" }
  ]
},
```

Make sure the `url` matches the exact filename you uploaded.

---

## Adding a PDF post

Same as audio, but:

```json
{
  "title": "My document post",
  "date": "2026-04-25",
  "body": "A short note about this document.",
  "attachments": [
    { "type": "pdf", "title": "My document.pdf", "url": "media/my-document.pdf" }
  ]
},
```

PDFs are both **embedded inline** (readers see a preview) and **downloadable**. If you don't want the embed, add `"embed": false` to the attachment.

---

## Adding a link post (just pointing to something on the web)

```json
{
  "title": "Interesting article I read",
  "date": "2026-04-25",
  "body": "A couple thoughts on this piece.",
  "attachments": [
    { "type": "link", "title": "Read the article", "url": "https://example.com/article" }
  ]
},
```

---

## Adding a video post (MP4)

For **short videos under 50 MB**, upload to `media/` and use `"type": "video"`.

For **long videos**, upload to YouTube instead and use `"type": "link"`. This avoids hitting GitHub's size limits and gives you a better video player.

```json
{ "type": "video", "title": "My clip", "url": "media/my-video.mp4" }
```

---

## Mixing attachments in one post

A post can have **multiple attachments** of any types:

```json
{
  "title": "Show notes for Episode 5",
  "date": "2026-04-25",
  "body": "The audio plus the reference docs mentioned in the episode.",
  "attachments": [
    { "type": "audio", "title": "Episode 5", "url": "media/ep5.mp3" },
    { "type": "pdf",   "title": "Show notes.pdf", "url": "media/ep5-notes.pdf" },
    { "type": "link",  "title": "Source article", "url": "https://example.com" }
  ]
}
```

---

## The golden rules of `posts.json`

JSON is strict. If you break one of these rules, your blog will stop showing posts until you fix it.

1. **Every post ends with `},`** (a comma) — except the last post, which ends with just `}`.
2. **Every string is wrapped in double quotes** `"like this"`. Never single quotes.
3. **Inside text, use `\n`** for new lines. Don't press Enter inside the quotes.
4. **Dates are `YYYY-MM-DD`** — e.g. `2026-04-25`. Posts sort newest-first by date automatically.
5. If something breaks, paste your `posts.json` into https://jsonlint.com — it tells you exactly what's wrong.

---

## Editing or deleting a post

- **Edit:** open `posts.json`, change the text, commit.
- **Delete:** open `posts.json`, remove the whole `{ ... }` block for that post (plus the comma), commit.
- **Delete a media file:** go to the file in `media/`, click it, click the trash icon.

---

## Changing the blog title or tagline

Edit `index.html`. Look for `<title>My Blog</title>` and `<h1 class="site-title">`. Change those to whatever you want. Commit.

---

## You're all set

- Post as often or as rarely as you want.
- Your content is just files — you can copy them to another host anytime.
- Your blog has no login, no database, no dynamic server — **there's nothing to hack.**
- Your blog will keep working as long as GitHub exists (which, in practice, is forever).
