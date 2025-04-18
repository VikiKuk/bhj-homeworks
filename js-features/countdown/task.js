const initialTime = document.getElementById('timer');

const timer = setInterval(() => {
    const current = Number(initialTime.textContent);
    if (current < 1) {
        clearInterval(timer);
        alert ('Вы победили в конкурсе!');
        return;
    }
    initialTime.textContent = current - 1;
    }, 100);