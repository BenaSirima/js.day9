const h1 = document.querySelector("#title")
const btn1 = document.querySelector("#btn1")
const main = document.querySelector('main')
// btn1.onclick = ()=> {
//     alert(111)
// }
// btn1.onclick = ()=> {
//     alert(222)
// }
// setTimeout(()=>{btn1.onclick = null}, 3000)

// }

// btn1.addEventListener('click', ()=>{
//     alert(999)
// })
// btn1.addEventListener('click', ()=>{
//     alert(777)
// })
const hdlclick = (evt,color) => {
    console.log(evt.target)
    evt.target.style.backgound = 'powderblue'
    h1.style.color = color
}
// [1,24,5].map(cb(el, index, array))
main.addEventListener('click',(evt)=> hdlclick(evt,'red'))
// setTimeout( ()=> {btn1.removeEventListener('click', ()=>hdlclick),3000})