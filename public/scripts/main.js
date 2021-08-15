import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')
const deleteButton = document.querySelectorAll('.actions a.delete')

checkButtons.forEach(button => {
    button.addEventListener('click', (event) => {handleClick(event)})
})

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => {handleClick(event, false)})
})

function handleClick(event, check = true) {
    event.preventDefault()
    modalTitle.innerHTML = check ? "Marcar como lida essa pergunta" : "Excluir essa perguta"
    modalDescription.innerHTML = check ? "Deseja marcar essa pergunta como lida?" : "Tem certeza que deseja excluir essa pergunta?"
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir"
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}