const btnEL = document.querySelector('.btn');
const inputEL = document.getElementById("input");
const copyIconEL = document.querySelector('.fa-copy');
const alertContainerEL = document.querySelector(".alert-container");

let alertTimeout; 

btnEL.addEventListener('click', ()=>{
    createPassword();
});

copyIconEL.addEventListener('click', ()=>{
    copyPassword();
    if(inputEL.value){
        // 1. Обновляем текст алерта ТОЛЬКО при нажатии на копирование
        alertContainerEL.innerText = inputEL.value + " Copied!";

        clearTimeout(alertTimeout); 
        alertContainerEL.classList.remove("active");
        
        alertTimeout = setTimeout(()=>{
            alertContainerEL.classList.add("active");
        }, 2000);
    }
});

function createPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/";
    const passwordLength = 16;
    let password = '';
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEL.value = password;
    
    // 2. УБРАЛИ строчку alertContainerEL.innerText отсюда!
    // Теперь генерация пароля никак не трогает старый алерт.
}

function copyPassword() {
    inputEL.select();
    inputEL.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEL.value);
}