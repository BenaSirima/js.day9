//const p1 = document.getElementById('para1')
// const p1 = document.querySelector('#para1')
// p1.style.color='navy'
//const pp1 = document.querySelector('.container > *:nth-child(2)')
//pp1.style.color = 'pink'
//const ctn = document.getElementsByClassName('container')
//const ctn = document.querySelector('.container')
//)
//ctn[0].style.border = '1px solid blue'
//const ctn = document.querySelectorAll('.container')
//const allPara = document.getElementsByTagName('p')
// const allPara = document.querySelectorAll('p')
// console.log(allPara)
// allPara[1].style.color = 'orange'
//const allP = document.querySelectorAll('p')
// allP.forEach(element => {
// element.style.color = 'salmon'
//     });
// for ( let el of allP) {
//     el.style.color = 'Navy'
// }
//const list = document.querySelector('#list')
//console.log(list.parentNode)
//console.log(list.previousSibling)
// console.log(list.firstChild.nextSibling)
//console.log(list.lastChild.previousSibling)
//console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)
// console.log(list.firstElementChild)
// console.log(list.lastElementChild)
//console.log(list.children)
// console.log(document.documentElement) //html tag
// console.log(document.body)
// console.log(list.parentNode)

const p1 = document.querySelector('#para1')
//p1.innerHTML = 'DOM = Document Object Model'
p1.onclick = () => {
    //p1.innerHTML = 'DOM = Document Object <em>Model</em>'
let newText = prompt('new text :') || p1.innerHTML
//p1.innerHTML += newText
//p1.textContent += newText
}
//console.log(p1.innerHTML)
// console.log(p1.attributes)
// p1.setAttribute('class', 'active')
// console.log(p1.outerHTML)
// console.log(p1.attribute('id'))
// console.log(p1.attribute('class'))
// p1.removeAttribute('class')
// console.log(p1.outerHTML)
// console.log(p1.attributes('class'))
const list = document.querySelector('#list')

const item = document.createElement('#li')
//console.log(item)
item.textContent = 'BYD'
item.setAttribute('class', 'active')
//console.log(item.outerHTML)
//list.before(item)
list.lastElementChild.replaceWith(item)
const list2 = list.cloneNode(true)
document.body.append(list2)
