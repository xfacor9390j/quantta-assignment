const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('image')
           
          

        }
        else {
            entry.target.classList.remove('image')
        }
    })
})
const hiddenElements = document.querySelectorAll('.home-page-img');
hiddenElements.forEach((el) => {
    observer.observe(el)
})

const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('image')
            observerTwo.unobserve(entry.target)
            

        }
        else {
            entry.target.classList.remove('image')
        }
    })
})
const hiddenElementsTwo = document.querySelectorAll('p');
hiddenElementsTwo.forEach((el) => {
    observerTwo.observe(el)
})