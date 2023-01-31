let counter = 0
let counterDom = document.querySelector("#counter")
let buttons = document.querySelectorAll(".buttons")

counterDom.textContent = 0

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        
        if(e.target.textContent == "Decrease"){
            
            counter--
        }else if(e.target.textContent == "Reset"){
            
            counter = 0
        }else{
        
            counter++
        }
        
        if(counter > 0){
            
            counterDom.style.color = "green"
        }else if (counter < 0){

            counterDom.style.color = "red"
        }else{

            counterDom.style.color = "black"
        }
        
        counterDom.textContent = counter
    })
})