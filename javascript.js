

for (let button of document.getElementsByClassName("button")) {
    button.addEventListener("touchstart", () => {
        document.getElementById(button.id).style.backgroundColor = "#444"
        document.getElementById(button.id).style.color = "#FFF"
    })

    button.addEventListener("touchend", () => {
        document.getElementById(button.id).style.backgroundColor = "#333"
        document.getElementById(button.id).style.color = "#222"
    })
}
