//Variável do tipo textual com aspas duplas
var endereco = "Praça da Sé, 45 Apt#5";

console.log(endereco);

//Variável do tipo textual com aspas simples
endereco = 'Praça da Sé, 45 Apt#5';

console.log(endereco);

//Barra inversa para indicar que as aspas simples são textos
var frase = 'Não misture o uso de aspas duplas " e aspas simples \' dentro do seu texto';

console.log(frase);

//Propriedades da String
var frase2 = "Olá Mundo!";

console.log(frase2);
console.log(frase2.length); //pega o número total de caracteres da variável
console.log(frase2.search("Mundo")); //pesquisa se existe a palavra referenciada e retorna a posição que ela ocupe
console.log(frase2.toUpperCase()); //converte a variável para maiúscula
