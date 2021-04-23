const off = (el) => {
    el.classList.add("off")
    const off = () => {
        el.classList.remove("off")
        el.classList.add("none")
    }
    setTimeout(off, 300)
}

export { off }