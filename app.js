const grid = document.querySelector("#app-grid");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");

function render() {
  const q = search.value.trim().toLowerCase();
  const list = APPS.filter(a =>
    [a.name, a.category, a.description].some(v => v.toLowerCase().includes(q))
  );

  count.textContent = `${list.length} app${list.length === 1 ? "" : "s"}`;
  empty.hidden = list.length !== 0;

  grid.innerHTML = list.map(app => `
    <article class="card">
      <div class="icon">${app.icon}</div>
      <h3>${escapeHtml(app.name)}</h3>
      <div class="meta">${escapeHtml(app.category)} · v${escapeHtml(app.version)}</div>
      <p class="desc">${escapeHtml(app.description)}</p>
      <a class="btn" href="${safeUrl(app.url)}" target="_blank" rel="noopener noreferrer">
        View app
      </a>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",""":"&quot;","'":"&#039;"
  }[c]));
}

function safeUrl(value) {
  try {
    const u = new URL(value);
    return /^https?:$/.test(u.protocol) ? u.href : "#";
  } catch {
    return "#";
  }
}

search.addEventListener("input", render);
render();
