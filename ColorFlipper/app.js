let buttonChange = document.querySelector("#button-color-change")
let colorInner = document.querySelector("#color")

let simpleColor = ["red", "green", "rgba(133,122,200)", "#f15025"]

//Simple

buttonChange.addEventListener("click", () => {

    let randomColor = Math.floor(Math.random() * simpleColor.length) 
    
    colorInner.innerHTML = simpleColor[randomColor]
    document.body.style.backgroundColor = simpleColor[randomColor]
    
})