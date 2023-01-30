let top = 0

exports.scroll = (direction) => {
    const doc = document.documentElement
    if(direction=="up" && top==0) return
    if(direction=="up") {
        top+=100
        if(top==0){
            doc.style.setProperty("--current-top", `0px`) 
            return
        }
        doc.style.setProperty("--current-top", `calc( ${top}vh + 80px )`)
    }
    if(direction=="down") {
        top-=100
        doc.style.setProperty("--current-top", `calc( ${top}vh + 80px )`)
    }
}

const swapLabel = (target, whichLabel) => {
    if(target.classList.contains("fold-away")) return
    const labelVisible = target.parentNode.querySelector(".label-visible")
    if(labelVisible) labelVisible.classList.remove("label-visible")
    try{
        target.parentNode.parentNode.querySelector(".work-"+whichLabel).querySelector(".side-label").classList.add("label-visible")
    }
    catch(e){

    }
}

let lastRequest = Date.now()
exports.fold = (e, whichLabel) => {
    if(lastRequest + 1000 > Date.now()) return
    lastRequest = Date.now()
    let target = e.currentTarget
    if(target.classList.contains("side-label")) target=e.currentTarget.parentNode.parentNode.querySelector(".work-"+whichLabel)
    swapLabel(e.currentTarget, whichLabel)

    const direction = target.dataset.direction
    if (direction=="hide") {
        target.dataset.direction="show"
        target.classList.add("fold-away")
        return
    }
    if (direction=="show") {
        target.dataset.direction="hide"
        target.classList.remove("fold-away")
        return
    }
}

window.isInViewport=(element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom / document.documentElement.clientHeight >= 0.5 && rect.bottom / document.documentElement.clientHeight < 1.5
    );
}