const passWordBox = document.querySelector("#password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
 let creatPassWord = () =>{
   let password = "";
    let allCharacters = uppercase + lowercase + numbers + symbols;
    for (let i = 0; i < length+4; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    passWordBox.value = password;
 }

let copyPassword = () => {
    passWordBox.select();
    document.execCommand("copy");
    setTimeout(() => {
        passWordBox.value = "";
    },1000);
}
