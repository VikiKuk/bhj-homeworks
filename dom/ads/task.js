document.querySelectorAll('.rotator').forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let index = 0;
  
    function rotate() {
      const current = cases[index];
  
      // убираю активный класс
      current.classList.remove('rotator__case_active');
  
      // увеличение индекса, бесконечный цикл
      index = (index + 1) % cases.length;
      const next = cases[index];
  
      // установливаю активный класс и цвет
      next.classList.add('rotator__case_active');
      next.style.color = next.dataset.color;
  
      // повторить через указанное время в data-speed
      setTimeout(rotate, next.dataset.speed);
    }
  
    // установливаю цвет первому активному
    cases[index].style.color = cases[index].dataset.color;
  
    // стартую ротацию с указанной задержкой
    setTimeout(rotate, cases[index].dataset.speed);
  });