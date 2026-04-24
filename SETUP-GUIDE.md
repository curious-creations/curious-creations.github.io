# Setup Guide — Get your blog online (first time only)

This will take **about 15 minutes**, and you only do it once. After this, posting new content takes 1 minute.

You don't need to install anything. No terminal, no code. Everything happens in your web browser.

---

## Step 1 — Create a free GitHub account

1. Go to **https://github.com/signup**
2. Sign up with your email. Free account is all you need.
3. Pick any username. **Tip:** your username becomes part of your blog's URL (e.g. `yourname.github.io`), so pick something you're okay with. You can also use a different repo name later for a URL like `yourname.github.io/blog`.

---

## Step 2 — Create a new repository (a "repo" is just a folder of files on GitHub)

1. After logging in, click the **+** icon in the top-right → **New repository**.
2. For **Repository name**, use one of these two options:
   - **Option A (blog at your root URL):** name it exactly `yourname.github.io` — replace `yourname` with your GitHub username. Your blog will live at `https://yourname.github.io`
   - **Option B (blog at a sub-path):** name it anything, e.g. `blog`. Your blog will live at `https://yourname.github.io/blog`
3. Set it to **Public** (required for free GitHub Pages).
4. **Don't** check any of the "initialize with" boxes. Leave the repo empty.
5. Click **Create repository**.

---

## Step 3 — Upload your blog files

You'll land on a page that says "Quick setup." Look for the link that says **"uploading an existing file"** (it's in the middle of the page).

1. Click **uploading an existing file**.
2. Open the `my-blog` folder I gave you on your computer.
3. **Select all the files and folders inside** `my-blog` (not the `my-blog` folder itself — its *contents*): `index.html`, `style.css`, `app.js`, `posts.json`, `.nojekyll`, and the `media` folder.
4. Drag them onto the GitHub upload area. Wait for them all to finish uploading.
5. Scroll down. In the "Commit changes" box, you can leave the default message.
6. Click the green **Commit changes** button.

---

## Step 4 — Turn on GitHub Pages

1. In your repo, click the **Settings** tab (top-right of the repo page).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **main** and **/ (root)**, then click **Save**.
5. Wait about 1–2 minutes. Refresh the Pages settings page. You'll see a green box with your live URL.

**That's it. Your blog is live.** Visit the URL GitHub gave you.

---

## Troubleshooting

- **"I see the README file instead of my blog"** → You probably uploaded the `my-blog` folder instead of its contents. Delete it and re-upload the files that are *inside* `my-blog`.
- **"The page is blank or says 404"** → Wait 2 full minutes after enabling Pages. GitHub takes a moment to build.
- **"The PDFs show as broken"** → Make sure the `media` folder was uploaded and contains your files.

---

## Custom domain (optional, costs ~$12/year)

Want `myblog.com` instead of `yourname.github.io`? Buy a domain at Namecheap or Cloudflare, then follow GitHub's free guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

You can always add this later.
