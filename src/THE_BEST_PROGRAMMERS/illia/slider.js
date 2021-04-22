const arrInit = []

const initSlider = function({ container, list, prevButton, nextButton, step, isHide = false }) {
    if (!container || !list || !step) throw new Error("Ти неправильно вказав опції для слайдера")
    let b1 = prevButton
    let b2 = nextButton
    let h = isHide
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
            if (prevButton) prevButton.style.display = "block"
            if (nextButton) nextButton.style.display = "block"
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

    const init = () => {
        console.log("init");
        if (h) {
            b1.style.display = "flex"
            b2.style.display = "flex"
        } else {
            b1.style.display = "inline-block"
            b2.style.display = "inline-block"
        }
        list.style.transform = `none`
    }

    // _____
    if (prevButton) prevButton.addEventListener("click", prev)
    if (nextButton) nextButton.addEventListener("click", next)
    arrInit.push(init)
}

const init = () => {
    arrInit.forEach(e => e())
}


export { initSlider, init }