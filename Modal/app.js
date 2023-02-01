let buttonShowModal = document.querySelector("#button-open")
let modal = document.querySelector(".modal")

buttonShowModal.addEventListener("click", () => {
    
    modal.classList.add("show-modal")
})

let buttonModalClose = document.querySelector(".close").addEventListener("click", () => {
    modal.classList.remove("show-modal")
})