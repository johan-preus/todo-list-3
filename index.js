const list = document.querySelector('#todo-list')
const addInput = document.querySelector('#todo-input')

const addToDo = () => {
    const value = addInput.value
    if(value.trim() === ''){
        alert('Cannot add empty to-do')
        return
    }
    const li = document.createElement('li')
    const checkInput = document.createElement('input')
    const p = document.createElement('p')
    checkInput.type = 'checkbox'
    checkInput.onchange = function(){
        if(this.checked){
            this.parentElement.style.textDecoration = 'line-through'
        } else {
            this.parentElement.style.textDecoration = 'none'
        }
    }
    p.innerHTML = addInput.value
    li.appendChild(p)
    li.appendChild(checkInput)
    list.appendChild(li)
    p.onclick = function(){
        this.parentElement.remove()
    }
}