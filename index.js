// const slider = document.querySelector('.slider')
// const prevbtn = document.querySelector('.prev-btn')
// const nextbtn = document.querySelector('.next-btn')
// const slides = Array.from(document.querySelectorAll('.slide')); // забераем все slide и из коллекции делаем масси с помошью array

// const slidesLenght = slides.length;
// let slideIndex = 0;



// prevbtn.addEventListener('click', goToPrevSlide);
// nextbtn.addEventListener('click', goToNextSlide);


// function goToPrevSlide(){
//     slideIndex = slideIndex - 1
//     if (slideIndex < 0){
//         slideIndex = slidesLenght - 1
//     }
//     showSlide();
// }

// function goToNextSlide(){
//     slideIndex = slideIndex + 1
//     if (slideIndex >= slidesLenght){
//         slideIndex = 0
//     }
//     showSlide();
// }


// function showSlide(){
//     slides.forEach((slide, index) => {
//         if (index === slideIndex){
//             slide.style.display = 'block';
//         } else {
//             slide.style.display = 'none';
//         }
//     })
// }




// accordion


// const acc = Array.from(document.querySelectorAll('.accordion'));

// for (let i=0; i<acc.length; i++){
//     acc[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//         let panel = this.nextElementSibling;
//         if (panel.style.maxHeight){
//             // panel.style.maxHeight = null
//             panel.style.cssText = `max-height: ${null}px;padding: 0px 30px`;
//         } else {
//             // panel.style.maxHeight = panel.scrollHeight + 'px';
//             panel.style.cssText = `max-height: ${panel.scrollHeight + 20}px;padding:10px 30px`;
//         }
//     })
// }


// Burger

// const menu = document.querySelector('.menu');
// const span = document.querySelector('.menu-burger__header')
// span.addEventListener('click', () =>{
//     menu.classList.toggle('active');
// })




//  tabs

// const btns = document.querySelectorAll('.tabs__btn')


// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const item = document.querySelector('.tabs__block._active')
//         const itemBtn = document.querySelector('.tabs__btn._active')

//         if(item){
//             item.classList.remove('_active')
//         }

//         if(itemBtn){
//             itemBtn.classList.remove('_active')
//         }
//         const newxItemBtn = `#${btn.getAttribute('data-tab')}`;

//         const nextItem = document.querySelector(newxItemBtn);

//         btn.classList.add('_active');
//         nextItem.classList.add('_active');


//     })
// })



// Dino

let dino = document.getElementById('dino')
let cactus = document.getElementById('cactus')

document.addEventListener("keydown", function(event){
    jump();
});

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add('jump')
    }
    setTimeout(function(){
        dino.classList.remove('jump')
    }, 300)
}
let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    if (cactusLeft < 20 && cactusLeft > 0 && dinoTop >= 140){
        alert("Game over!")
    }
}, 10)

// Продукты

