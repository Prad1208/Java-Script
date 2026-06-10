const passwordBox=document.getElementById("passBox");
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allchars=upperCase+lowercase+numbers+symbols;

function generatePassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length)
        {
        password += allchars[Math.floor(Math.random()*allchars.length)];
}

passwordBox.value=password;
}

function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");
}












