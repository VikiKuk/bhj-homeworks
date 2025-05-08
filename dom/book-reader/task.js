const fontSizeControls = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizeControls.forEach(control => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    // удаляю активный класс у всех кнопок
    fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));
    
    // добавляю активный класс к текущей кнопке
    control.classList.add('font-size_active');

    // удаляю старые классы размера
    book.classList.remove('book_fs-small', 'book_fs-big');

    // получаю значение data-size
    const size = control.dataset.size;

    // добавляю нужный класс
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});