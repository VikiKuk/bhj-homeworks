const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

// обработка кликов по лункам
for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      deadCounter.textContent = Number(deadCounter.textContent) + 1;
    } else {
      lostCounter.textContent = Number(lostCounter.textContent) + 1;
    }

    // победа
    if (Number(deadCounter.textContent) === 10) {
      alert("Вы выиграли!");
      resetGame();
    }

    // поражение
    if (Number(lostCounter.textContent) === 5) {
      alert("Вы проиграли!");
      resetGame();
    }
  };
}

// сброс счётчиков
function resetGame() {
  deadCounter.textContent = 0;
  lostCounter.textContent = 0;
}