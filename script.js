const openBtn = document.getElementById("openInvitation");
const opening = document.getElementById("opening");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

openBtn.onclick = () => {
  opening.style.display = "none";
  content.classList.remove("hidden");
  music.play();
};

/* Countdown */
const targetDate = new Date("July 21, 2026 08:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `Menuju Hari Bahagia: ${d} Hari ${h} Jam ${m} Menit ${s} Detik`;
}, 1000);

/* Copy Rekening */
function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Nomor rekening berhasil disalin!");
}

/* Wishes */
document.getElementById("wishForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target[0].value;
  const msg = e.target[1].value;
  const list = document.getElementById("wishList");

  const div = document.createElement("div");
  div.innerHTML = `<strong>${name}</strong><p>${msg}</p>`;
  list.prepend(div);

  e.target.reset();
});
