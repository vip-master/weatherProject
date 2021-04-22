const initSlider = function({ container, list, prevButton, nextButton, step }) {
    if (!container || !list || !step) throw new Error("Ти неправильно вказав опції для слайдера")
    let width = Number.parseInt(getComputedStyle(list).width)
    let conWidth = Number.parseInt(getComputedStyle(container).width)
    list.style.transitionDuration = ".5s"

    let currentPos = 0

    const compute = () => {

        width = Number.parseInt(getComputedStyle(list).width)
        conWidth = Number.parseInt(getComputedStyle(container).width)
    }

    const setPos = (x) => {
        list.style.transform = `translateX(-${x}px)`
    }

    const next = () => {
        compute()
        currentPos += step;
        if (width - currentPos < conWidth) currentPos = Math.abs(conWidth - width)
        setPos(currentPos)
    }

    const prev = () => {
        compute()
        currentPos -= step;
        if (currentPos < 0) currentPos = 0
        setPos(currentPos)
    }

    // _____
    if (prevButton) prevButton.addEventListener("click", prev)
    if (nextButton) nextButton.addEventListener("click", next)
}

export { initSlider }