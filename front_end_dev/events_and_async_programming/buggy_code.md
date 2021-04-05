The code below is buggy. The person who created the code expects that nothing will happen when the user clicks on the image. This, however, isn't the case; clicking the image still brings the user to another web page.

Study the code and explain the bug.

```JavaScript
document.querySelector('img').addEventListener('click', event => {
  event.stopPropagation();
}, false);
```

```html
<a href="https://www.launchschool.com">
  Home
  <img src="https://d24f1whwu8r3u4.cloudfront.net/assets/launch-logo-b6d01bd15ee9da31457ee3c315845718823aa8a741858be598ab35042a312348.svg" />
</a>
```

The problem is the use of `stopPropagation` rather than `preventDefault`.
