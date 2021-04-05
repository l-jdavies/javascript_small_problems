// Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array. The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings, so on and so forth, all the way up to the "grandest" parent. Assume that the grandest parent is the element with an id of "1". 


/*
 * test cases:
> domTreeTracer(1);
= [["ARTICLE"]]
> domTreeTracer(2);
= [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
> domTreeTracer(22);
= [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
*/
function domTreeTracer(id) {
  currentElement = document.getElementById(id);
  let tree = [];
  let parentElement = currentElement.parentNode;

  while (parentElement.tagName !== 'BODY') {
    parentElement = currentElement.parentNode;
    let children = getTagNames(parentElement.children);
    tree.push(children);

    currentElement = parentElement;
  }
  return tree;
}

function getTagNames(htmlCollection) {
  let arr = Array.prototype.slice.call(htmlCollection);
  return arr.map(node => node.tagName);
}

