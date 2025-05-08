const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskText = input.value.trim(); //не даю создавать пустую таску с одними пробелами
  if (taskText === '') return;

  const task = document.createElement('div');
  task.classList.add('task');

  task.innerHTML = `
    <div class="task__title">${taskText}</div>
    <a href="#" class="task__remove">&times;</a>
  `;

  // обработчик удаления задачи
  task.querySelector('.task__remove').addEventListener('click', () => {
    task.remove();
  });

  list.appendChild(task);
  input.value = '';
});