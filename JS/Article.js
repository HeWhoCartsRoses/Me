
function arthead(fil) {
  let head = document.createElement('h2');
  head.textContent = fil;
  head.classList.add('h2');
  return head;
}
function para(fil) {
  let pa = document.createElement('p');
  pa.textContent = fil;
  pa.classList.add('text')
  pa.addEventListener("click", () => {

  })
  return pa;
}
function article(arr) {
  let article = document.createElement('div')
  article.classList.add('article')
  let art = Object.values(arr);
  article.appendChild(arthead(art[0]));
  for (var i = 1; i < art.length; i++) {
    console.log(art.length)
    article.appendChild(para(art[i]));
  }
  let span = document.createElement('span');
  span.classList.add('expandButton');
  span.addEventListener("click", () => {
    article.classList.toggle('article-open')
    text.classList.toggle('p--open')
  })
  span.textContent = 'expand';
  article.appendChild(span);
  return article;
}
let dumb = document.querySelector('.articles')
data.forEach(el => {
  dumb.appendChild(article(el));
})



