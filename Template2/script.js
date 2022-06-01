document.addEventListener('click', e => {
    const isMoreinfo = e.target.matches("[data-more-info]")
    if (!isMoreinfo && e.target.closest("[data-item]") !=null) return

    let currentMoreinfo
    if (isMoreinfo){
        currentMoreinfo = e.target.closest("[data-more-info]")
        currentMoreinfo.classList.toggle("active")}
    else if (isMoreinfo) {
        currentMoreinfo = e.target.closest("[data-more-info].active")
        currentMoreinfo.classList.remove("active")
    }
})