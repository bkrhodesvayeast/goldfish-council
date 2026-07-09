function thumbUrl(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function makeCard(video) {
  const card = document.createElement("div");
  card.className = "card";

  const videoWrap = document.createElement("div");
  videoWrap.className = "video-wrap";

  const img = document.createElement("img");
  img.src = thumbUrl(video.youtubeId);
  img.alt = video.title;
  img.loading = "lazy";

  const playBtn = document.createElement("div");
  playBtn.className = "play-btn";

  videoWrap.appendChild(img);
  videoWrap.appendChild(playBtn);

  // Click the thumbnail to swap in a real embedded, playing YouTube iframe.
  videoWrap.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`;
    iframe.title = video.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoWrap.innerHTML = "";
    videoWrap.appendChild(iframe);
  }, { once: true });

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML = `
    <div class="goldfish-name">${escapeHtml(video.goldfishName || "")}</div>
    <h3 class="card-title">${escapeHtml(video.title || "")}</h3>
    <p class="card-desc">${escapeHtml(video.description || "")}</p>
    <div class="card-date">${formatDate(video.date)}</div>
  `;

  card.appendChild(videoWrap);
  card.appendChild(body);
  return card;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function render(videos) {
  const grid = document.getElementById("grid");
  const emptyState = document.getElementById("empty-state");
  grid.innerHTML = "";

  if (videos.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  videos.forEach((v) => grid.appendChild(makeCard(v)));
}

function init() {
  const sorted = [...VIDEOS].sort((a, b) => new Date(b.date) - new Date(a.date));
  render(sorted);

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = sorted.filter((v) => {
      const haystack = `${v.goldfishName} ${v.title} ${v.description}`.toLowerCase();
      return haystack.includes(q);
    });
    render(filtered);
  });
}

document.addEventListener("DOMContentLoaded", init);
