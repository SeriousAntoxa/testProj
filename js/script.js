//--POPUP--

const popupLink = document.querySelector('.popup-link');
const body = document.querySelector('body')

popupLink.addEventListener('click', (e) => {
   const popupName = popupLink.getAttribute('href').replace('#', '')
   const curentPopup = document.getElementById(popupName)
   popupOpen(curentPopup)
   e.preventDefault()
})

function popupOpen(curentPopup) {
   curentPopup.classList.add('open')
   curentPopup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__content')) {
         popupClose(e.target.closest('.popup'))
      }
   })
   document.body.classList.add('_scroll')
}

const popupCloseEl = document.querySelector('.close-popup')

popupCloseEl.addEventListener('click', (e) => {
   popupClose(popupCloseEl.closest('.popup'))
})

function popupClose() {
   const popupActive = document.querySelector('.popup.open')
   popupActive.classList.remove('open')
   document.body.classList.remove('_scroll')
}


//--BURGER--
const menuActives = document.querySelectorAll('.menu__active')
if (menuActives.length > 0) {
   for (let index = 0; index < menuActives.length; index++) {
      const menuActive = menuActives[index]
      menuActive.addEventListener('click', (e) => {
         if (!menuActive.parentElement.classList.contains('active')) {
            menuActive.parentElement.classList.add('active')
         } else {
            menuActive.parentElement.classList.remove('active')
         }

      })
   }
}

const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.menu__body')
if (iconMenu != null) {
   iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_scroll')
      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')

   })
}

const menuLinks = document.querySelectorAll('li > a')
for (let i = 0; menuLinks.length > i; i++) {
   const menuLink = menuLinks[i]
   menuLink.addEventListener('click', (e) => {
      document.body.classList.remove('_scroll')
      iconMenu.classList.remove('_active')
      menuBody.classList.remove('_active')
   })
}

const visSlide = document.querySelector('._vis')
const firstSlider = document.querySelector('.first-slider')
const lastSlider = document.querySelector('.last-slider')
const sliderImg = document.querySelector('.slider__images').children
const controlPrev = document.querySelector('.slider__control_prev')
const controlNext = document.querySelector('.slider__control_next')
const controlDots = document.querySelector('.slider__control_dots').children
const firstDot = document.querySelector('.first-dot')
const lastDot = document.querySelector('.last-dot')

console.log(sliderImg)
if (visSlide != null) {

   controlNext.addEventListener('click', (e) => {
      bk: for (let i = 0; i < sliderImg.length; i++) {
         let nowSlide = sliderImg[i]
         let nowDot = controlDots[i]
         if (nowSlide.classList.contains('_vis') && !lastSlider.classList.contains('_vis')) {
            nowSlide.nextElementSibling.classList.add('_vis')
            nowSlide.nextElementSibling.classList.remove('slider__img')
            nowSlide.classList.remove('_vis')
            nowSlide.classList.add('slider__img')
            nowDot.classList.remove('_dotActive')
            nowDot.nextElementSibling.classList.add('_dotActive')
            break bk
         } else if (lastSlider.classList.contains('_vis')) {
            firstSlider.classList.add('_vis')
            firstSlider.classList.remove('slider__img')
            lastSlider.classList.remove('_vis')
            lastSlider.classList.add('slider__img')
            firstDot.classList.add('_dotActive')
            lastDot.classList.remove('_dotActive')
            break bk
         }
      }
   })

   controlPrev.addEventListener('click', (e) => {
      bk: for (let i = 0; i < sliderImg.length; i++) {
         let nowSlide = sliderImg[i]
         let nowDot = controlDots[i]
         if (firstSlider.classList.contains('_vis')) {
            lastSlider.classList.add('_vis')
            lastSlider.classList.remove('slider__img')
            firstSlider.classList.remove('_vis')
            firstSlider.classList.add('slider__img')
            firstDot.classList.remove('_dotActive')
            lastDot.classList.add('_dotActive')
            break bk
         } else if (sliderImg[i].classList.contains('_vis') && !firstSlider.classList.contains('_vis')) {
            nowSlide.previousElementSibling.classList.add('_vis')
            nowSlide.previousElementSibling.classList.remove('slider__img')
            nowSlide.classList.remove('_vis')
            nowSlide.classList.add('slider__img')
            nowDot.classList.remove('_dotActive')
            nowDot.previousElementSibling.classList.add('_dotActive')
            break bk
         }



      }
   })

}


