let header = document.querySelector("header")
console.log(header);


window.addEventListener("scroll", () => {
    if (window.scrollY > 50){
        
        header.classList.add("bg-white")
    }else if(window.scrollY < 50){

        header.classList.remove("bg-white")
    }
})