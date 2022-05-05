// ### 0. Imports
import './style.css';

// ### 1. Data
const taskList = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Study ES6',
    completed: true,
    index: 1,
  },
  {
    description: 'Complete to do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'Sport',
    completed: true,
    index: 3,
  },
];

// ### 2. DOM Manipulations
const mainContainer = document.querySelector('.list-container');

mainContainer.innerHTML = `<li class="row">
<h1>Today's To Do</h1>
<i class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
</div>
<div>
<input placeholder="Add to your list...">
</li>`;

taskList.forEach((e) => {
  let isChecked;
  let strikeThrough;
  if (e.completed === true) {
    isChecked = 'checked';
    strikeThrough = 'strike-through';
  }

  mainContainer.innerHTML += `<li class="row">
  <input class="checkbox" type="checkbox" ${isChecked}>
  <p class="${strikeThrough}">${e.description}</p>
  <i class="fa-solid fa-ellipsis-vertical fa-lg font-awesome-icon"></i>
  </li>`;
});

mainContainer.innerHTML += '<button class="button">Clear all completed</button>';
