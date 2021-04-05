// Write a function that colors a specific generation of the DOM tree. A generation is a set of elements that are on the same level of indentation. We'll be using a "styled" HTML for this exercise to better visualize the generations. You may use the .generation-color class to color the specific generation. You can assume that only non-negative integers will be provided as arguments.


function colorGeneration(gen) {
  let generation = findGeneration(gen);

  generation.forEach(node => node.setAttribute('class', 'generation-color'))
}

function findGeneration(gen) {
  let htmlCollection = Array.from(document.body.children);

  for (let count = 1; count < gen; count++) {
    let temp = [];

    for (let idx = 0; idx < htmlCollection.length; idx++) {
      temp.push(Array.from(htmlCollection[idx].children));
    }
    htmlCollection = temp.flat();
  }
  return htmlCollection;
}

colorGeneration(7);
