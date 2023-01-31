let buttonChange = document.querySelector("#button-color-change")
let rgbSource = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let colorDom = document.querySelector("#color")

buttonChange.addEventListener("click", () => {

    let color = "#"
    for(let i = 0; i < 6; i++){

        color += rgbSource[Math.round(Math.random() * (rgbSource.length - 1) )]
    }

    colorDom.innerHTML = color
    document.body.style.backgroundColor = color 
})
