const btnEL = document.querySelector('.btn');

const inputEL = document.getElementById("input");

const copyIconEL = document.querySelector('.fa-copy');

const alertContainerEL = document.querySelector(".alert-container");

btnEL.addEventListener('click', ()=>{
    createPassword();
});

copyIconEL.addEventListener('click', ()=>{
    copyPassword();
    if(inputEL.value){
        alertContainerEL.classList.remove("active")
        setTimeout(()=>{
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
    alertContainerEL.innerText = password + " Copied!"
}

function copyPassword() {
    inputEL.select();
    inputEL.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEL.value);

}

