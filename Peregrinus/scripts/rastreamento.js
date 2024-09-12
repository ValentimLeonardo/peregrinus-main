
let num  = 10000;
let num2 = 99999;
let numeroAleatorio = Math.floor(Math.random() * (num2 - num + 1)) + num;
console.log(numeroAleatorio);
document.getElementById('aleatorio').innerHTML = 'codigo: '+ numeroAleatorio


