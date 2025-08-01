// Pegar o valor da variavel A e passar para B (fazer a troca de valores)

let A = 7;
let B = 94;

/* Com a função temp o valor de A passa a ser temporario e temporariamente mantem o valor trocado 
entre as variáveis, sem essa função o valor de A só é respeitado na primeira troca, pois o java faz
a leitura do ultimo valor da variavel, fazendo com que a troca de valores dê errado*/
let temp = A; 
A = B;
B = temp;

// Depois da troca... A = 94 e B = 7
console.log(A)
console.log(B)

console.log('' || 'DOIDO') //true ou false