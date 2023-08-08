(function() {
    const processList = document.querySelector('.processList')
    const performList = document.querySelector('.performList')
    const leftProfileContainer = document.querySelector('.container-left')
    const rightProfileContainer = document.querySelector('.container-right')
    
    const performtems = processList.querySelectorAll('.container-box__skillBar--percent')
    const performItems = performList.querySelectorAll('.container-box__skillBar--percent')
    const leftItems = leftProfileContainer.querySelectorAll('.container-box')
    const rightItems = rightProfileContainer.querySelectorAll('.container-box')

    function addObserver(items) {
        for (const item of items) {
            const observer = new IntersectionObserver(
                (entries, observer) => entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('active-IO')
                            observer.unobserve(entry.target)
                        }, 300)
                    }
                })
            )
    
            observer.observe(item)
        }
    }

    const observerItems = [performtems, performItems, leftItems, rightItems]
    observerItems.forEach(items => addObserver(items))
})()