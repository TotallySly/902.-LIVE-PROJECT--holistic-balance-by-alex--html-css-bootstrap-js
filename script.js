let navMenu = document.querySelector('.nav-menu').querySelectorAll('a')

navMenu.forEach((element) => {
    element.addEventListener('click', function () {
        navMenu.forEach((nav) => nav.classList.remove('active'))

        this.classList.add('active')
    })
})
