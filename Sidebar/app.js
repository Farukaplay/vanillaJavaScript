let buttonOpenSidebar = document.querySelector("#button-sidebar")
let buttonCloseSidebar = document.querySelector(".close")
let sidebar = document.querySelector(".sidebar")

buttonOpenSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("show")
})

buttonCloseSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show")
})

let aBlank = document.querySelectorAll(".sidebar-footer a")

aBlank.forEach(a => a.setAttribute("target", "_blank"))