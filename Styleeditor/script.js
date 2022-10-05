let selectedBlock = null;

function changeSelected(e) {
  selectedBlock = document.querySelector(`#${e.id}`)
}

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', inputChanged);
})

function inputChanged(e) {
  if (selectedBlock) {
    selectedBlock.style.setProperty(`--${e.target.name}`, e.target.value)
  }
}