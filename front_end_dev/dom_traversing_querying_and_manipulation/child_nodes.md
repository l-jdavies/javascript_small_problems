How many direct and indirect child nodes does each parent node — starting with the element with an id of 1 — have in the DOM generated by the following HTML:
```html
<div id="1">
  <h1 id="2">Hello, <em id="3">World</em></h1>
  <p id="4">
    Welcome to wonderland. This is an
    <span id="5">awesome</span> place.
  </p>
  <a href="#" id="6"><strong id="7">Enter</strong></a>
  <div id="8"><p id="9"><a href="#" id="10">Go back</a></p></div>
</div>
```

Consider the following when counting the direct and indirect child nodes for each parent node:

Any DOM node that has at least one child node is a parent node.
Indirect child nodes are the child nodes of child nodes.

Direct child nodes of the element with an id of `1` are:
1. empty text node
2. `h1` element with id of `2`
3. empty text node
4. `p` element with id of `4`
5. empty text node
6. `a` element with id of `6`
7. empty text node
8. `div` with id of `8`
9. empty text node

Direct child nodes of `h1` element with id of `2`
1. text node
2. `em` element 

Direct child node of `em` element with id of `3`
1. text node

Direct child nodes of `p` element with id of `4`
1. text node
2. `span` element
3. text node

Direct child node of `span` element with id of `5`
1. text node

Direct child node of `a` element with id of `6`
1. `strong` element

Direct child node of `strong` element with id of `7`
1. text node

Direct child node of `div` element with id of `8`
1. `p` element

Direct child node of `p` element with id of `9`
1. `a` element

Direct child node of `a` element with id of `10`
1. text node
