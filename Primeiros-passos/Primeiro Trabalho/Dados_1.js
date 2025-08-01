/*
console.log("caneta");
console.log("10");
console.log("6.4");
console.log("1.5");
console.log("7.9"); 
*/

//Simplificando as informações acima, coloquei como comentário para não executar o código
//Criando variáveis para infomar o significado de valores e evitar colocar comentarios explicando>
//O significado na frente dos códigos

var nome = "caneta";
var quantidade = 10;
var preco = 6.4; // ( let ) é a forma mais atual de utilizar variável que tem diferente função de var
var imposto = 1.5;
var precoFinal = preco + imposto; //outro exemplo de colocar a somataria de preço e imposto

console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(preco + imposto);
console.log(precoFinal); // outra forma de colocar a somatoria acima

nome = "caneta BIC"; // outra forma de utilizar a variável e modifcar NOME ou VALORES
console.log(nome);