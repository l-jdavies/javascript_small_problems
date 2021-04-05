const todo_items = [
  {id: 1, title: 'Homework'},
  {id: 2, title: 'Shopping'},
  {id: 3, title: 'Calling Mom'},
  {id: 4, title: 'Coffee with John '}
];

class Todos {
  constructor() {
    this.todos = todo_items;
    this.todoTemplate = Handlebars.compile(document.querySelector('#todos_template').innerHTML);
    this.deleteTodoId = null;

    this.refreshDisplay();
  }

  refreshDisplay() {
    this.clearTodos();
    this.renderTodos();
    this.bindEvents();
  }

  clearTodos() {
    let todoSection = document.querySelector('#display_todos');
    while (todoSection.contains(document.querySelector('.todo_items'))) {
      todoSection.lastElementChild.remove();
    }
  }

  renderTodos() {
    let todoSection = document.querySelector('#display_todos');

    this.todos.forEach(todo => {
      todoSection.insertAdjacentHTML('beforeend', this.todoTemplate(todo));
    })
  }

  bindEvents() {
    let allDeleteBtns = Array(...document.querySelectorAll('.delete_button'));
    let yesBtn = document.querySelector('#yes_button');
    let noBtn = document.querySelector('#no_button');

    this.deleteBtnHandler = (event) => this.confirmDelete(event);

    allDeleteBtns.forEach(button => {
      button.addEventListener('click', this.deleteBtnHandler);
    });

    yesBtn.addEventListener('click', this.handleDeletePopupResponse.bind(this));
    noBtn.addEventListener('click', this.handleDeletePopupResponse.bind(this));
  }

  confirmDelete(event) {
    event.preventDefault();

    this.showModal();
    this.deleteTodoId = event.target.previousElementSibling.getAttribute('data-id');
  }

  handleDeletePopupResponse(event) {
    event.preventDefault();

    switch (event.target.id) {
      case "yes_button":
        this.deleteTodo();
        break;
      default:
        this.hideModal();
    }
  }

  deleteTodo() {
    this.hideModal();
    this.todos = this.todos.filter(todo => todo.id !== Number(this.deleteTodoId));
    this.refreshDisplay();
  }

  hideModal() {
    let modal = document.querySelector('.modal');
    modal.style.visibility = 'hidden';
  }

  showModal() {
    let modal = document.querySelector('.modal');
    modal.style.visibility = 'visible';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Todos();
})
