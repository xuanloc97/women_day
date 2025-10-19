// Tự động phát nhạc khi có tương tác nhỏ (để tránh bị chặn autoplay)
const bgMusic = document.getElementById("bg-music");
document.addEventListener("click", () => {
  bgMusic.play().catch(() => {});
});

// Hiệu ứng hoa rơi
function startFlowerFalling() {
  const container = document.querySelector(".flowers");
  for (let i = 0; i < 8; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 4 + Math.random() * 6 + "s";
    flower.style.opacity = Math.random();
    container.appendChild(flower);

    setTimeout(() => flower.remove(), 10000);
  }
}

setInterval(startFlowerFalling, 1000);
startFlowerFalling();
