const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

// новый элемент для скорости клика
const speed = document.createElement("div");
speed.className = "clicker__status";
speed.innerHTML = `Скорость клика: <span id="clicker__speed">0</span>`;
cookie.parentElement.insertBefore(speed, cookie);

let clicks = 0;
let lastClickTime = Date.now();

cookie.onclick = () => {
  clicks++;
  counter.textContent = clicks;
  if (cookie.width === 200) {
    cookie.width = 170;
  } else {
    cookie.width = 200;
  }

  // скорость клика
  const now = Date.now();
  const secondsSinceLastClick = (now - lastClickTime) / 1000;
  lastClickTime = now;

  const currentSpeed = 1 / secondsSinceLastClick;
  document.getElementById("clicker__speed").textContent = currentSpeed.toFixed(2);
};