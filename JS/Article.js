
function arthead(fil) {
  let head = document.createElement('h2');
  head.textContent = fil;
  head.classList.add('h2');
  return head;
}
function ptag(fil) {
  let pa = document.createElement('p');
  pa.textContent = fil;
  pa.classList.add('.date');
  return pa;
}
function para(fil) {
  let pa = document.createElement('p');
  pa.textContent = fil;
  return pa;
}
function article(arr) {
  let article = document.createElement('div')
  article.classList.add('article')
  let art = Object.values(arr);
  article.appendChild(arthead(art[0]));
  article.appendChild(ptag(art[1]));
  for (var i = 2; i < art.length; i++) {
    article.appendChild(para(art[i]));
  }
  let span = document.createElement('span');
  span.classList.add('expandButton');
  span.addEventListener("click", () => {
    article.classList.toggle('article-open')
  })
  span.textContent = 'expand';
  article.appendChild(span);
  return article;
}
let dumb = document.querySelector('.articles')
data.forEach(el => {
  dumb.appendChild(article(el));
})



