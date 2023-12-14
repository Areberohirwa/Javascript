const div = document.querySelector('.box')
const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn')
addBtn.addEventListener('click', function () {
    div.classList.toggle('blinker')
    div.classList.toggle('fonts')
})
