// цикл для получения необходимых элементов   
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__link');

    // открытие/закрытие списка при клике на value
    value.addEventListener('click', () => {
      list.classList.toggle('dropdown__list_active');
    });

    // обработка выбора пункта
    items.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault(); 
        value.textContent = item.textContent; 
        list.classList.remove('dropdown__list_active'); 
      });
    });
  });

  //закрытие dropdown при клике вне
  document.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      const list = dropdown.querySelector('.dropdown__list');
      if (!dropdown.contains(event.target)) {
        list.classList.remove('dropdown__list_active');
      }
    });
  });
