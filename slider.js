const slider = document.querySelector(".slider")
const trail = document.querySelectorAll(".trail__item")

let value = 0
let trailValue = 0
let interval = 10000

const slide = (condition) => {
    clearInterval(start)
    condition === "increase" ? initiateINC() : initiateDEC()
    move(value, trailValue)
    animate()
    start = setInterval(() => slide("increase"), interval);
}

const initiateINC = () => {
    trail.forEach(cur => cur.classList.remove("active"))
    value === 40 ? value = 0 : value += 20
    trailUpdate()
}

const initiateDEC = () => {
    trail.forEach(cur => cur.classList.remove("active"))
    value === 0 ? value = 40 : value -= 20
    trailUpdate()
}

const move = (S, T) => {
    slider.style.transform = `translateX(-${S}%)`
    trail[T].classList.add("active")
}

const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
tl.from(".slide__bg", {x: "-100%", opacity: 0})
  .from(".slide__description", {opacity: 0}, "-=0.3")
  .from(".slide__title", {opacity: 0, y: "30px"}, "-=0.3")
  .from(".slide__more-info-btn", {opacity: 0, y: "-40px"}, "-=0.8")

const animate = () => tl.restart()

const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 20) {
        trailValue = 1
    } else if (value === 40) {
        trailValue = 2
    } 
    
}   

let start = setInterval(() => slide("increase"), interval)

document.querySelectorAll(".slider-btn").forEach(cur => {
    cur.addEventListener("click", () => cur.classList.contains("next-btn") ? slide("increase") : slide("decrease"))
})

const clickCheck = (e) => {
    clearInterval(start)
    trail.forEach(cur => cur.classList.remove("active"))
    const check = e.target
    check.classList.add("active")

    if(check.classList.contains("first-slide")) {
        value = 0
    } else if (check.classList.contains("second-slide")) {
        value = 20
    } else if (check.classList.contains("third-slide")) {
        value = 40
    }
    trailUpdate()
    move(value, trailValue)
    animate()
    start = setInterval(() => slide("increase"), interval)
}

trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

const touchSlide = (() => {
    let start, move, change, sliderWidth

    slider.addEventListener("touchstart", (e) => {
        start = e.touches[0].clientX
        sliderWidth = slider.clientWidth/trail.length
    })
    
    slider.addEventListener("touchmove", (e) => {
        e.preventDefault()
        move = e.touches[0].clientX
        change = start - move
    })

    const mobile = (e) => {
        change > (sliderWidth/4)  ? slide("increase") : null;
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    slider.addEventListener("touchend", mobile)
})()



// const $slider = document.querySelector('.slider');
// const $trailBoxes = document.querySelectorAll('.trail__items');
// const $prevBtn = document.querySelector('#prev-btn');
// const $nextBtn = document.querySelector('#next-btn');
// let currentSlide = null;

// function showNext() {
//     $trailBoxes.forEach(item => item.classList.remove("active"));
// }

// function showNext(current){

// }

// $slider.addEventListener('mouseover', function(event, slick, currentEl){
//     console.log("Look what i have:", currentEl);
//     this.currentSlide = currentEl;
//     console.log('That i put on current var:', this.currentSlide);
// })


