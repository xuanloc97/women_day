// Hoa rơi
const canvas = document.getElementById('fallingFlowers');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flowers = [];
const flowerCount = 40;

for (let i = 0; i < flowerCount; i++) {
  flowers.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * flowerCount
  });
}

function drawFlowers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,182,193,0.8)";
  ctx.beginPath();
  for (let i = 0; i < flowerCount; i++) {
    const f = flowers[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updateFlowers();
}

let angle = 0;
function updateFlowers() {
  angle += 0.01;
  for (let i = 0; i < flowerCount; i++) {
    const f = flowers[i];
    f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
    f.x += Math.sin(angle) * 2;
    if (f.y > canvas.height) {
      flowers[i] = { x: Math.random() * canvas.width, y: 0, r: f.r, d: f.d };
    }
  }
}

setInterval(drawFlowers, 33);

// Tim bay ngẫu nhiên
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 400);

// Auto bật nhạc luôn
window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');
  music.volume = 0.7;
  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      music.muted = true;
      music.play();
      setTimeout(() => music.muted = false, 500);
    });
  }
});

// Tự động bật nhạc (một số trình duyệt yêu cầu tương tác)
document.getElementById("music-btn").addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    music.volume = 0.8;
    music.play();
  });
  



