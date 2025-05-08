function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
  
  function checkVisibility() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      if (isVisible(el)) {
        el.classList.add('reveal_active');
      } else {
        el.classList.remove('reveal_active');
      }
    });
  }
  
  // проверяю не видны ли элементы при загрузке
  checkVisibility();
  
  // проверяю при прокрутке
  window.addEventListener('scroll', checkVisibility);