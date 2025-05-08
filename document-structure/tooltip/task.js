const tooltips = document.querySelectorAll('.has-tooltip');

// создаю общий элемент подсказки
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

let activeElement = null;

tooltips.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); 

    // второй клик по уже активному элементу (скрытие подсказки)
    if (activeElement === link) {
      tooltip.classList.remove('tooltip_active');
      activeElement = null;
      return;
    }

    // текст + позиция
    tooltip.textContent = link.title;
    const coords = link.getBoundingClientRect();
    tooltip.style.left = coords.left + 'px';
    tooltip.style.top = coords.bottom + 'px';

    // показ подсказки
    tooltip.classList.add('tooltip_active');
    activeElement = link;
  });
});