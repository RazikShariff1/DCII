gsap.set(".ekimages", { opacity: 0 })
gsap.to(".ekimages", {
    opacity: 1,
    duration: 3,
    stagger: 0.1,
    ease: Power2.easeInOut,
})
gsap.to(".one", {
    delay: 4,
    duration: 1.5,
    x: "30%",
    y: "105%"
})
gsap.to(".two", {
    delay: 4,
    duration: 1.5,
    x: "-300%",
    y: "100%"
})
gsap.to(".three", {
    delay: 4,
    duration: 1.5,
    x: "-8%",
    y: "-40%"
})
gsap.to(".four", {
    delay: 4,
    duration: 1.5,
    x: "-480%",
    y: "10%"
})
gsap.to(".five", {
    delay: 4,
    duration: 1.5,
    x: "160%",
    y: "-10%"
})
gsap.to(".six", {
    delay: 4,
    duration: 1.5,
    x: "-270%",
    y: "-70%"
})
gsap.set(".intro", { opacity: 0, y: 20 })
gsap.to(".intro", {
    opacity: 1,
    y: 0,
    duration: 3,
    stagger: 0.1,
    ease: Power2.easeInOut,
})
let op=gsap.timeline({
    scrollTrigger:{
        trigger:"#pageten",
        pin:true,
        // markers:true,
        scrub:2,
        // duration:2,
        stagger:0.1,
        start:"50% 50%",
        end:"100% 50%"
    }
})
op.to("#pagetentop",{
    top:"-50%"
},'a')
op.to("#pagetenbottom",{
    bottom:"-50%"
},'a')
op.to("#pagetentop h1",{
    bottom:"-100%"
},'a')
op.to("#pagetenbottom h1",{
    top:"-100%"
},'a')



// cards--
let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pagechar",
        // markers:true,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
})

t2
.to(".text",{
    top:"5%",
},'a')
.to("#card-one",{
    top:"35%"
},'a')
.to("#card-two",{
    top:"130%"
},'a')

.to("#card-two",{
    top:"42%"
},'b')
.to("#card-one",{
    width:"65%",
    height:"70vh",
    top:"32%"
},'b')
.to("#card-three",{
    top:"130%"
},'b')
.to("#card-three",{
    top:"51%"
},'c')
.to("#card-two",{
    width:"70%",
    top:"41%",
    height:"70vh",
},'c')

let c3anim=gsap.timeline({
    scrollTrigger:{
        trigger:"#card-three",
        // pin:true,
        scrub:2,
        start:"20% 50%",
        end:"30% 50%"
    }
})
gsap.set("#c3heroh1", { opacity: 0 })
c3anim.to("#c3heroh1",{
    opacity: 1,
    duration: 2,
    stagger: 0.1,
    ease: Power2.easeInOut,
})