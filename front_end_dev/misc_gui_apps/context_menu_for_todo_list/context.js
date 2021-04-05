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

    document.addEventListener('contextmenu', this.handleContextClick.bind(this));
    document.addEventListener('click', this.handleClickEvent.bind(this));
  }

  handleClickEvent(event) {
    if (this.clickOccurredOnContextMenu(event)) {
      this.handleClickOnContextOption(event);
    } else if (this.clickOccurredOnModal(event)) {
      this.handleDeletePopupResponse(event);
    }
    else {
      this.hideContext();
    }
  }

  handleClickOnContextOption(event) {
    switch (event.target.id) {
      case "edit":
        this.hideContext();
        break;
      case "show":
        this.hideContext();
        break;
      case "delete":
        this.hideContext();
        this.showModal();
    }
  }

  handleContextClick(event) {
    if (this.clickOccurredOnTodo(event)) {
      this.setIdOfDeleteTodo(event);
      this.displayContext(event);
    } else {
      this.hideContext();
    }
  }

  setIdOfDeleteTodo(event) {
    let todoId = event.target.querySelector('p').getAttribute('data-id');
    this.deleteTodoId = todoId;
  }

  hideContext() {
    let contextMenu = document.querySelector('.context_menu');
    contextMenu.style.display = 'none';
  }

  displayContext(event) {
    event.preventDefault();

    let contextMenu = document.querySelector('.context_menu');
    contextMenu.style.display = 'inline-block';
    this.setContextCoordinates(event);
  }

  setContextCoordinates(event) {
    let contextMenu = document.querySelector('.context_menu');
    let contextPosition = this.getClickPosition(event);

    contextMenu.style.left = `${contextPosition.x}px`;
    contextMenu.style.top = `${contextPosition.y}px`
  }

  // get the coordinates of where the mouse click occurred
  getClickPosition(event) {
    let posX = 0;
    let posY = 0;

    if (!event) {
      event = window.event;
    }

    if (event.pageX || event.pageY) {
      posX = event.pageX;
      posY = event.pageY;
    } else if (event.clientX || event.clientY) {
      posX = (event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);
      posY = (event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);
    }

    return {
      x: posX,
      y: posY,
    };
  }

  clickOccurredOnTodo(event) {
    return event.target.className === 'todo_items';
  }

  clickOccurredOnContextMenu(event) {
    return event.target.matches('.context_menu') || event.target.parentElement.matches('.context_menu') ||
      event.target.parentElement.parentElement.matches('.context_menu');
  }

  clickOccurredOnModal(event) {
    return event.target.parentElement.className === "modal" || event.target.parentElement.className === "modal-content"
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
