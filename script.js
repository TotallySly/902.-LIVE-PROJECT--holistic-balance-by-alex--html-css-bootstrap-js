let navMenu = document.querySelector('.nav-menu').querySelectorAll('a')

navMenu.forEach((element) => {
    element.addEventListener('click', function () {
        navMenu.forEach((nav) => nav.classList.remove('active'))

        this.classList.add('active')
    })
})

window.addEventListener('scroll', reveal)

function reveal() {
    let reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight
        let revealTop = reveals[i].getBoundingClientRect().top
        let revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('activeScroll')
        } else {
            reveals[i].classList.remove('activeScroll')
        }
    }
}
