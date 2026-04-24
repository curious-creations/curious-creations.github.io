# Media folder

Put your MP3s, PDFs, images, and MP4s in here. Then reference them in `posts.json` like this:

```
{ "type": "audio", "url": "media/your-file.mp3", "title": "Optional title" }
{ "type": "pdf",   "url": "media/your-doc.pdf", "title": "Optional title" }
{ "type": "link",  "url": "https://example.com", "title": "Click here" }
{ "type": "video", "url": "media/your-video.mp4", "title": "Optional title" }
```

**Size tips:**
- GitHub has a soft 1 GB repo limit and a 100 MB per-file limit.
- For long videos, upload to YouTube and use `"type": "link"` instead.
- For podcast-length MP3s (under ~50 MB each), this works great.
