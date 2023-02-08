let buttonTab = document.querySelectorAll(".button-primary")
let tabsItem = document.querySelectorAll(".tabs-item")

buttonTab.forEach(button => {
    button.addEventListener("click", () => {
        let dataTab = button.dataset.item
        let activeTab = document.querySelector(".button-primary.active")
        
        activeTab.classList.remove("active")
        button.classList.add("active")

        let activeTabMenu = document.querySelector(".tabs-item.active")
        activeTabMenu.classList.remove("active")

        let tabControl = document.querySelector(`.tabs-item[data-id="${dataTab}"]`)
        tabControl.classList.add("active")
    
    })
})