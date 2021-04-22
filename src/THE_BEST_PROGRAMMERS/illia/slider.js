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

    const setBut = (b) => {
        if (b) {
            b.removeAttribute("style")
        }
    }
    const hideBut = (b) => {
        if (b) {
            b.style.visibility = "hidden"
            b.style.pointerEvents = "none"
        }
    }

    const hide = () => {

        if (onEnd) {
            hideBut(nextButton)
            setBut(prevButton)
        } else if (onStart) {
            hideBut(prevButton)
            setBut(nextButton)
        } else {
            setBut(prevButton)
            setBut(nextButton)
        }
    }

    const setPos = (x) => {
        list.style.transform = `translateX(-${x}px)`
    }

    const next = () => {
        compute()
        currentPos += step;
        if (width - currentPos < conWidth) {
            currentPos = Math.abs(conWidth - width)
            onEnd = true
        } else onEnd = false
        setPos(currentPos)
        onStart = false
        if (isHide) hide()

    }

    const prev = () => {
        compute()
        currentPos -= step;
        if (currentPos < 0) {
            currentPos = 0
            onStart = true
        } else onStart = false
        setPos(currentPos)
        onEnd = false
        if (isHide) hide()
    }

    const init = (s) => {
        if (Number.isInteger(s)) step = s
        setBut(b1)
        setBut(b2)
        list.style.transform = `translateX(0px)`
    }

    // _____
    if (isHide) hide()
    if (prevButton) prevButton.addEventListener("click", prev)
    if (nextButton) nextButton.addEventListener("click", next)
    arrInit.push(init)
}

const init = () => {
    arrInit.forEach(e => e())
}


export { initSlider, init }