// Without changing the behavior of the following code, remove the call to event.stopPropagation and refactor the result.

document.querySelector('html').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: none';
});

document.querySelector('#container').addEventListener('click', event => {
  event.stopPropagation();
});

// The first code snippet means if a user clicks on any part of the page an event, which hides the element with an id of `container` is fired during the bubbling phase.
// The second code snippet means the if the element with an id of `container` or any of its children, is clicked, then the event will not travel through the bubbling phase, meaning the first code snippet won't fire and the `container` element will not be hidden.

// refactored code:
document.querySelector('html').addEventListener('click', event => {
  let containerEle = document.querySelector('#container');

  if (containerEle.contains(event.target) === false) {
    containerEle.style = 'display: none';
  }
})

// the refactored code checks if the containerEle, or any of it's children, are the `event.target`. If not, then the `containerEle` is hidden.

