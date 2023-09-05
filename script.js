const buttonOpen = document.querySelector('.icon-open')
const modal = document.querySelector('.modal-wrapper')
const buttonClose = document.querySelector('.icon-close')

buttonOpen.addEventListener("click", function(){
    modal.style.display = 'block'
})

buttonClose.addEventListener("click", function(){
    modal.style.display = 'none'
})