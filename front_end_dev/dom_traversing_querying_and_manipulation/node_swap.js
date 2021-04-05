// Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids. The function returns true for valid swaps and undefined for invalid. To put the focus on the node swapping functionality, you can assume that nodes will have a value for the id attribute and two arguments will always be provided. 

function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (invalidInput(node1, node2)) return undefined;

  let node1Clone = node1.cloneNode(true);
  let node2Clone = node2.cloneNode(true);
  let parentNode1 = node1.parentElement;
  let parentNode2 = node2.parentElement;

  parentNode1.replaceChild(node2Clone, node1);
  parentNode2.replaceChild(node1Clone, node2);
  return true;
}

function invalidInput(node1, node2) {
  return (!document.body.contains(node1)) || (!document.body.contains(node2)) || (node1.contains(node2)) || (node2.contains(node1));
}

console.log(nodeSwap(1, 20))
console.log(nodeSwap(1, 4))
console.log(nodeSwap(9, 3))
console.log(nodeSwap(1, 2))
console.log(nodeSwap(1, 2))
console.log(nodeSwap(3, 1))
console.log(nodeSwap(7, 9))

