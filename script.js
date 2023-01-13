let trigger = document.querySelector(".trigger").onclick = function () {
    open();
}

function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("open");
    document.querySelector("#f_line").classList.toggle("open");
    document.querySelector("#s_line").classList.toggle("open");
    document.querySelector("#t_line").classList.toggle("open");
}
 
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}