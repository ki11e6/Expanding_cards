const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {                         //iterate through all the .panel class elemnts arry
    panel.addEventListener("click", () => {
        removeClassActive()
        panel.classList.add('active')               //classList is used to modify class in document, add() is used to add class to the element
    })
})

function removeClassActive() {
    panels.forEach((panel) => {
        panel.classList.remove('active')            //classList.remove() removes the specified class
    })
}