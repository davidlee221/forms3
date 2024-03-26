const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const name = document.getElementById('firstname');
let confirmSpan = document.getElementById('confirm-span');

function checkInput(){  
    // console.debug('yes', password.innerText, confirm.textContent);
    (password.value !== confirm.value)
      ? confirmSpan.innerText = 'passwords must match!'
      : confirmSpan.innerText = '';
}

password.addEventListener("input", checkInput);
confirm.addEventListener("input", checkInput);