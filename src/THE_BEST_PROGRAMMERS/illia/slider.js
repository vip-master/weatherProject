const initSlider = function({ container, list, prevButton, nextButton, step, isHide = false }) {
    if (!container || !list || !step) throw new Error("Ти неправильно вказав опції для слайдера")
    let width = Number.parseInt(getComputedStyle(list).width)
    let conWidth = Number.parseInt(getComputedStyle(container).width)
    list.style.transitionDuration = ".5s"
    let onStart = true
    let onEnd = false

    let currentPos = 0

    const compute = () => {

        width = Number.parseInt(getComputedStyle(list).width)
        conWidth = Number.parseInt(getComputedStyle(container).width)
    }

    const hide = () => {

        if (onEnd) prevButton.style.display = "none"
        else if (onStart) nextButton.style.display = "none"
        else {
            prevButton.style.display = "block"
            nextButton.style.display = "block"
        }
    }

    const setPos = (x) => {
        list.style.transform = `translateX(-${x}px)`
    }

    const next = () => {
        compute()
        if (isHide) hide()
        currentPos += step;
        if (width - currentPos < conWidth) {
            currentPos = Math.abs(conWidth - width)
            onEnd = true
        } else onEnd = false
        setPos(currentPos)
    }

    const prev = () => {
        compute()
        if (isHide) hide()
        currentPos -= step;
        if (currentPos < 0) {
            currentPos = 0
            onStart = true
        } else onstart = false
        setPos(currentPos)
    }

    // _____
    if (prevButton) prevButton.addEventListener("click", prev)
    if (nextButton) nextButton.addEventListener("click", next)
}

export { initSlider }