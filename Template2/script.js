document.addEventListener('click', e => {
    const isMoreinfo = e.target.matches("[data-more-info]")
    if (!isMoreinfo && e.target.closest("[data-item]") !=null) return

    let currentMoreinfo
    if (isMoreinfo){
        currentMoreinfo = e.target.closest("[data-more-info]")
        currentMoreinfo.classList.toggle("active")
    }

    document.querySelectorAll("[data-more-info].active").forEach(moreinfo => {
        if (moreinfo === currentMoreinfo) return
        moreinfo.classList.remove("active")
    })
})