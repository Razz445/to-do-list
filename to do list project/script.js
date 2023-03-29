const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const todoList = document.querySelector('.todo-list');
const totalCount = document.querySelector('.total-count');

let todos = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
    completed: false
  };
  todos.push(todo);
  displayTodos();
  input.value = '';
});

function displayTodos() {
  todoList.innerHTML = '';
  totalCount.textContent = todos.length;
  todos.forEach(todo => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = !todo.completed;
      displayTodos();
    });
    const span = document.createElement('span');
    span.classList.add('todo-text');
    span.textContent = todo.text;
    const button = document.createElement('button');
    button.classList.add('delete-btn');
    button.textContent = 'Delete';
    button.addEventListener('click', () => {
      todos = todos.filter(item => item.id !== todo.id);
      displayTodos();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    if (todo.completed) {
      li.classList.add('completed');
    }
    todoList.appendChild(li);
  });
}
