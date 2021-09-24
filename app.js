const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover) //вызывается, когда перетаскиваемый элемент находится над местом, куда мы можем поместить (placeholder)
  placeholder.addEventListener('dragenter', dragenter) //вызывается, когда перетаскиваемый элемент находится на территории, куда мы можем поместить (placeholder)
  placeholder.addEventListener('dragleave', dragleave) //вызывается по окончанию перетаскивания элемента и выхода из территории (placeholder)
  placeholder.addEventListener('drop', dragdrop) //вызывается по отпусканию элемента
}

function dragstart (event) {
  event.target.classList.add('hold')
  setTimeout(() => {
    event.target.classList.add('hide')
  }, 0)
}

function dragend (event) {
  event.target.classList.remove('hold', 'hide')
  // event.target.className = 'item' //работает аналогично
}

function dragover (event) {
  event.preventDefault()
}

function dragenter (event) {
  event.target.classList.add('hovered')
}

function dragleave (event) {
  event.target.classList.remove('hovered')
}

function dragdrop (event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}
