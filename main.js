// // const cursor=document.querySelector('.cursor')
// //
// // let li=document.querySelectorAll("li")
// // li.forEach(function(elem){
// //   elem.addEventListener("mouseenter",()=>{
// //     cursor.style.transform=`scale(${5})`
// //     // cursor.style.transition= `opacity 0.77 0.7s cubic-bezier${(0.19, 1, 0.22, 1)} 0.5s`

// //   })
// //   elem.addEventListener("mouseleave",()=>{
// //     cursor.transform=`scale(${1})`
// //   })
// // })

// // page3
// let bg=document.querySelector("#pageten")
// let imtenek=document.querySelector("#imtenek")
// let cursor=document.querySelector('.cursor')
// let imtendo=document.querySelector("#imtendo")
// let imtenten=document.querySelector("#imtenten")
// let page4=document.querySelector("#pagechar")
// imtenek.addEventListener("mouseenter",(e)=>{
//   bg.style.backgroundColor="rgba(222, 184, 135, 0.554)"
//   cursor.style.opacity="1"
// })
// imtenek.addEventListener("mouseleave",(e)=>{
//   bg.style.backgroundColor="rgb(236, 234, 234)"
// })
// imtendo.addEventListener("mouseenter",()=>{
//   bg.style.backgroundColor="rgba(143, 188, 143, 0.718)"
// })
// imtendo.addEventListener("mouseleave",()=>{
//   bg.style.backgroundColor="rgb(236, 234, 234)"
// })
// imtenten.addEventListener("mouseenter",()=>{
//   bg.style.backgroundColor="rgba(172, 255, 47, 0.485)"
//   page4.style.backgroundColor="rgba(172, 255, 47, 0.485)"
//   page4.style.transition="1.5s"
// })
// imtenten.addEventListener("mouseleave",()=>{
//   bg.style.backgroundColor="rgb(236, 234, 234)"
//   page4.style.backgroundColor="rgb(236, 234, 234)"
//   page4.style.transition="0s"
// })
// let pageten=document.querySelector("#pageten")
// pageten.addEventListener('mousemove',(e)=>{
//     cursor.style.left=e.pageX+'px'
//     cursor.style.top=e.pageY+'px'
//     // console.log(e.pageX,e.pageY)
//   })




window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".content-overlay")
    gsap.set(menu, {
        opacity: 0
    })
    const squareContainer = document.querySelector("#c1square-container")
    const squareSize = 100
    const screenwidth = window.innerWidth
    const screenheight = window.innerHeight
    const numCols = Math.ceil(screenwidth / squareSize)
    const numRows = Math.ceil(screenheight / squareSize)
    const numSquares = numCols * numRows
    squareContainer.style.height = `${numRows * squareSize}px`
    squareContainer.style.width = `${numCols * squareSize}px`

    let squares = []

    function createSquares() {
        for (let i = 0; i < numSquares; i++) {
            const square = document.createElement("div")
            square.classList.add("square")
            squareContainer.appendChild(square)
            squares.push(square)
        }
    }
    function animateSquares() {
        gsap.fromTo(squares, {
            opacity: 0
        }, {
            opacity: 1,
            delay: 0.5,
            duration: 0.0005,
            stagger: {
                each: 0.004,
                from: "random"
            }
        })
        gsap.to(squares, {
            opacity: 0,
            delay: 1.5,
            duration: 0.005,
            stagger: {
                each: 0.004,
                from: "random"
            }
        })
    }
    let overlayVisible = false
    document.getElementById("toggle").addEventListener("click", () => {
        squareContainer.innerHTML = ""
        squares = []
        createSquares()
        animateSquares()
        gsap.to(menu, 0.025, {
            opacity: overlayVisible ? 0 : 1,
            visibility: overlayVisible ? "hidden" : "visible",
            delay: 1.15
        })
        gsap.to(menu, {
            zIndex: overlayVisible ? -1 : 0,
            delay: overlayVisible ? 0 : 2
        })
        overlayVisible = !overlayVisible
    })
}
)
let elements = document.querySelectorAll(".text")
elements.forEach((element) => {
    let innerText = element.innerText
    element.innerHTML = ""
    let textcontainer = document.createElement("div")
    textcontainer.classList.add("block")

    for (let letter of innerText) {
        let span = document.createElement("span")
        span.innerHTML = letter.trim() === "" ? "\xa0" : letter
        span.classList.add("letter")
        textcontainer.appendChild(span)
    }
    element.appendChild(textcontainer)
    element.appendChild(textcontainer.cloneNode(true))
})
elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.remove("play")
    })
})

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});