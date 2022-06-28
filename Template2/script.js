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

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".sidebar")[0].classList.add("fadeIn");
        }
    })
})

observer.observe(document.querySelectorAll(".items")[3]);