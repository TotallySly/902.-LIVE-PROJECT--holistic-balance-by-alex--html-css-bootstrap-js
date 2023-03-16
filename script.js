/**
 * I have created a custom class called '.display-none'
 * this class is toggled when the user clicks on the Hamburger Menu
 */

/**
 * HAMBURGER NAVIGATION
 */

const hamburgerOpen = document.querySelector('.fa-bars')
const hamburgerClose = document.querySelector('.fa-x')
const navigationLinks = document.querySelector('.navigation-links')
const navigationBar = document.querySelector('.navigation-bar')
let prevScrollPos = window.scrollY

if (window.innerWidth < 575) {
    navigationLinks.classList.add('display-none')

    const hamburgerNavItemsLi = document.querySelectorAll('li')

    hamburgerNavItemsLi.forEach((hamburgerNavItem) => {
        hamburgerNavItem.addEventListener('click', () => {
            navigationLinks.classList.add('display-none')
        })
    })

    const navigationAnchorLinks = document.querySelectorAll('.navigation-links a')

    navigationAnchorLinks.forEach((navigationAnchorLink) => {
        navigationAnchorLink.addEventListener('click', () => {
            navigationLinks.classList.toggle('display-none')
            hamburgerClose.classList.add('display-none')
            hamburgerOpen.classList.remove('display-none')
        })
    })
} else {
    navigationLinks.classList.remove('display-none')
}

/* TODO - Fix this so the navigation appears and disappears upon scroll. Scroll Y and let */

hamburgerOpen.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
    hamburgerOpen.classList.add('display-none')
    hamburgerClose.classList.remove('display-none')
})

hamburgerClose.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
    hamburgerOpen.classList.remove('display-none')
    hamburgerClose.classList.add('display-none')
})

/**
 * Closes the Navigation link when a link is clicked. However, I need to figure
 * out how to remove the hamburger icons a second time round.
 */

/**
 * Initially, every time the webpage loaded, the dropdown menu was
 * automatically showing. I have manually added the '.display-none'
 * class. This function then removes the '.display-none' class when the
 * user clicks on the drop down.
 *
 * In order for it to close, I negated the contains method, it will no
 * longer contain the '.display-none' class. As this is true, a second
 * event listener is added, that toggles the class back and forth.
 */

const chevronMenuMassage = document.querySelector('.nav-massage')
const dropDownMenuMassage = document.querySelector('.smaller-menu-items-massage')

chevronMenuMassage.addEventListener('click', () => {
    dropDownMenuMassage.classList.remove('display-none')

    if (!dropDownMenuMassage.classList.contains('display-none')) {
        chevronMenuMassage.addEventListener('click', () => {
            dropDownMenuMassage.classList.toggle('display-none')
        })
    }
})

const chevronMenuYoga = document.querySelector('.nav-yoga')
const dropDownMenuYoga = document.querySelector('.smaller-menu-items-yoga')

chevronMenuYoga.addEventListener('click', () => {
    dropDownMenuYoga.classList.remove('display-none')

    if (!dropDownMenuYoga.classList.contains('display-none')) {
        chevronMenuYoga.addEventListener('click', () => {
            dropDownMenuYoga.classList.toggle('display-none')
        })
    }
})

window.addEventListener('scroll', () => {
    const currentScollPos = window.scrollY

    if (prevScrollPos > currentScollPos) {
        navigationBar.classList.remove('display-none')
    } else {
        navigationBar.classList.add('display-none')
    }

    prevScrollPos = currentScollPos
})

navigationBar.addEventListener('mouseenter', () => {
    navigationBar.classList.remove('display-none')
})

navigationBar.addEventListener('mouseleave', () => {
    if (prevScrollPos > window.scrollY) {
        navigationBar.classList.remove('hide')
    } else {
        navigationBar.classList.add('display-none')
    }
})

/**
 * CAROUSEL
 */

const slider = document.querySelector('.slider')
const arrowLeft = document.querySelector('.left')
const arrowRight = document.querySelector('.right')

const slides = document.querySelectorAll('.slide')

let index = 0

let interval = setInterval(run, 10000)

function run() {
    index++
    changeSlides()
}

function changeSlides() {
    if (index > slides.length - 1) {
        index = 0
    } else if (index < 0) {
        index = slides.length - 1
    }

    // This is based on there being 5 items within the content section.
    // 100% divided by 4 is 25 %. This will need to be changed depending
    // on how many content slides there are.

    // .container .carousel .slider {
    //     width: 400%;
    // }
    //

    slider.style.transform = `translateX(${-index * 50}%)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 10000)
}

arrowRight.addEventListener('click', () => {
    index++

    changeSlides()
    resetInterval()
})

arrowLeft.addEventListener('click', () => {
    index--

    changeSlides()
    resetInterval()
})

/**
    Reveal Boxes
 */

window.addEventListener('scroll', reveal)

function reveal() {
    let reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight
        let revealTop = reveals[i].getBoundingClientRect().top
        let revealPoint = 3

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('activeScroll')
        } else {
            reveals[i].classList.remove('activeScroll')
        }
    }
}
