// ==============================================================
//  Blog renderer — reads posts.json and renders your posts.
//  You don't need to edit this file. Just edit posts.json to add
//  new posts. See POSTING-GUIDE.md for instructions.
// ==============================================================

document.getElementById('year').textContent = new Date().getFullYear();

// Minimal, safe-ish markdown-lite for the "body" field.
// Supports: **bold**, *italic*, [links](url), line breaks, and paragraphs.
// (Uses textContent for base escaping, so raw HTML in posts is shown as text.)
function renderBody(text) {
  if (!text) return '';
  // escape HTML first
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // paragraphs (blank line separates)
  const paragraphs = escaped.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

  return paragraphs.map(p => {
    let html = p
      // links [text](url)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // bold
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      // italic
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      // single line breaks
      .replace(/\n/g, '<br />');
    return `<p>${html}</p>`;
  }).join('');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return dateStr; }
}

function renderAttachment(att) {
  // Expected shapes:
  // { type: "audio", url: "media/foo.mp3", title: "..." (optional) }
  // { type: "pdf",   url: "media/foo.pdf", title: "..." (optional), embed: true (optional) }
  // { type: "link",  url: "https://...",    title: "Click here" }
  // { type: "video", url: "media/foo.mp4", title: "..." (optional) }
  if (!att || !att.url) return '';
  const title = att.title || att.url.split('/').pop();

  if (att.type === 'audio') {
    return `
      <div class="attachment">
        ${att.title ? `<div><strong>${escapeHtml(att.title)}</strong></div>` : ''}
        <audio controls preload="none" src="${escapeAttr(att.url)}"></audio>
        <a class="attachment-link" href="${escapeAttr(att.url)}" download>
          <span class="icon">⬇</span> Download audio
        </a>
      </div>`;
  }
  if (att.type === 'video') {
    return `
      <div class="attachment">
        ${att.title ? `<div><strong>${escapeHtml(att.title)}</strong></div>` : ''}
        <video controls preload="none" style="width:100%;border-radius:8px;" src="${escapeAttr(att.url)}"></video>
      </div>`;
  }
  if (att.type === 'pdf') {
    const embed = att.embed !== false;
    return `
      <div class="attachment">
        <a class="attachment-link" href="${escapeAttr(att.url)}" target="_blank" rel="noopener">
          <span class="icon">📄</span> ${escapeHtml(title)}
        </a>
        ${embed ? `<iframe class="pdf-embed" src="${escapeAttr(att.url)}" title="${escapeAttr(title)}"></iframe>` : ''}
      </div>`;
  }
  if (att.type === 'link') {
    return `
      <a class="attachment-link" href="${escapeAttr(att.url)}" target="_blank" rel="noopener noreferrer">
        <span class="icon">🔗</span> ${escapeHtml(title)}
      </a>`;
  }
  // fallback: generic link
  return `
    <a class="attachment-link" href="${escapeAttr(att.url)}" target="_blank" rel="noopener noreferrer">
      <span class="icon">📎</span> ${escapeHtml(title)}
    </a>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

function renderPost(post) {
  const attachmentsHtml = (post.attachments || []).map(renderAttachment).join('');
  return `
    <article class="post">
      <h2 class="post-title">${escapeHtml(post.title || 'Untitled')}</h2>
      <p class="post-date">${formatDate(post.date)}</p>
      <div class="post-body">${renderBody(post.body || '')}</div>
      ${attachmentsHtml ? `<div class="attachments">${attachmentsHtml}</div>` : ''}
    </article>`;
}

async function loadPosts() {
  const container = document.getElementById('posts');
  try {
    const res = await fetch('posts.json?cacheBust=' + Date.now());
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const posts = Array.isArray(data) ? data : (data.posts || []);
    // newest first by date (falls back to original order)
    posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    if (!posts.length) {
      container.innerHTML = '<p class="empty">No posts yet. Edit <code>posts.json</code> to add your first one.</p>';
      return;
    }
    container.innerHTML = posts.map(renderPost).join('');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<p class="empty">Could not load posts. Make sure <code>posts.json</code> exists and is valid JSON.</p>';
  }
}

loadPosts();
