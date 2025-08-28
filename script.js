const body = document.body
const savedColor = localStorage.getItem("favoriteColor")
if (savedColor) {
    body.style.backgroundColor = savedColor
}

const selectColor = document.getElementById("favorite-color")
if (selectColor) {
    selectColor.addEventListener("change", () => {
        let chosenColor = selectColor.value
        body.style.backgroundColor = chosenColor
        localStorage.setItem("favoriteColor", chosenColor)
    })
}