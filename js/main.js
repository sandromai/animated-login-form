const inputs = document.querySelectorAll('.input');

function handleInputFocus() {
  let parent = this.parentNode.parentNode;

  parent.classList.add('focus');
}

function handleInputBlur() {
  let parent = this.parentNode.parentNode;

  if (!this.value) {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', handleInputFocus);
  input.addEventListener('blur', handleInputBlur);
});
