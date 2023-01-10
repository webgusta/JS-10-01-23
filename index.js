/*

JAVASCRIPT / TYPESCRIPT

*/


//console.log("Code Runner rodando com sucesso")



//calcular porcentagem de um numero
/*
function porcentagem(numero,por){
    return (numero/100) * por;
}
console.log(porcentagem(1000,60));
*/



//criar função que execute a soma de dois valores
/*
function soma(valor1,valor2){
    return valor1 + valor2;
}
console.log(soma(20,30));
*/



//criar função que exiba a soma, subtrçao, multiplicaçao e divisao de dois numeros
/*
function operacoes (valor1,valor2){
    console.log(`A soma entre ${valor1} e ${valor2} é ${valor1 + valor2}`);
    console.log(`A subtração entre ${valor1} e ${valor2} é ${valor1 - valor2}`);
    console.log(`A multiplicação entre ${valor1} e ${valor2} é ${valor1 * valor2}`);
    console.log(`A divisão entre ${valor1} e ${valor2} é ${valor1 / valor2}`);
}
operacoes(50,100);
*/



//Criar funçao que verifica se um numero inteiro é divisivel por tres e retorne true ou false
/*
function divisivel(numeroint){
    //condicionais em JS
    if (numeroint % 3 == 0){
        return true
    }else{
        return false
    }
}
console.log(divisivel(3));
*/



//criar um mecanismo que exiba se um usuario esta logado, ou não
/*
autenticado = true;
switch (autenticado){
    case true:
        console.log("O usuario esta logado");
        break;
    case false:
        console.log("O usuario não esta logado");
}
*/



//fazer converssão de medida de celsius para fahrenheit
/*
function cpf(n){
    return n * 1.8 + 32;
}
console.log(cpf(20));
*/



//fazer converssão de medida de fahrenheit para celsius

function fpc(n){
    return (n - 32) / 1.8;
}
console.log(fpc(68));



