
let big = document.querySelector('.menu-button')

function list(fil) {
  let pa = document.createElement('li');
  pa.textContent = fil;
  return pa;
}
function menu(arr) {
  let soup = document.createElement('div')
  soup.classList.add('menu')
  big.addEventListener("click", () => {
    soup.classList.toggle('menu--open')
  })
  let crap = document.createElement('ul')
  soup.appendChild(crap)
  for (var i = 0; i < arr.length; i++) {
    crap.appendChild(list(arr[i]));
  }
  return soup;
}
let image = document.querySelector('.header')

image.appendChild(menu(menuItems));


