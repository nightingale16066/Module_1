const input = document.createElement('input');
const paragraph = document.createElement('p');
const body = document.querySelector('body');

input.addEventListener('change', e => {
  setTimeout(() => {
    paragraph.textContent = input.value;
  }, 300) 
})


body.append(input, paragraph);