console.log(19.90 * 0.6); // esse seria o valor literal, a diferença para o VAR é não ter que
// repetir toda vez a operação com o VAR ou LET é só repetir o nome da VAR

let preco = 19.90;
let desconto = 0.4; // significa 40% de desconto
let PrecoComDesconto = preco * (1 - desconto); // outra forma de fazer a variavel igual acima

console.log(preco * (1 - desconto)); // essa operação faz o preço substraído de 40%
console.log(PrecoComDesconto); // outra forma de ter o mesmo resultado da linha acima

let nome = "Caderno"; // String (texto) = seguência de simbolos (o mesmo que textos em códigos)
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria + 
            ", Preço: " + preco + ", Desconto: " + desconto); 
// o sinal de + em texto voce passa o comando para o programa somar dois texto
