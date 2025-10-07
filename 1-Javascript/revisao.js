//Comentario de linha

/*
comentario 
de bloco
*/

{/*cometario jsx*/}

//Variaveis e constantes
const nome_aluno = 'Juca'; //Constante [local]

let idade_aluno = 23; //variavel [local]
var turma_aluno = 1001; //variavel [global]

//Escrever mensagens no console
console.log(nome_aluno)


//Funções
/*tradicional*/

function multiplicar(x, y){
  return x * y;
}

function multiplicar2(x, y){
  const resultado = x * y;
  return resultado;
}

console.log(multiplicar(10, 5));

/*arrow function*/

const somar = (x, y) => { 
  const soma = x + y; 
  return soma;
  
};

console.log(somar(7, 5));


// Template Literais
const curso = 'ADS';
const estudante = 'Clara';

console.log('Oi,' + estudante + 
  '. Você esta matriculada no curso ' + curso + '.');

console.log(`Oi ${estudante}. 
Voce está matriculada no curso ${curso}`);


// Objetos (dicionários)
const pessoa = {
  nome : 'Juca',
  idade : 40,
  cidade : 'Rio de Janeiro'
};

console.log('Nome: ' + pessoa.nome);
console.log('Idade: ' + pessoa.idade);
console.log('Cidade: ' + pessoa.cidade);

//Desestruturação (destructing)

//Objetos
const {nome, idade} = pessoa;
console.log('Nome: ' + nome);
console.log('Idade: ' + idade);

//Vetores
const vetor1 = [3, 5, 6, 7, 8, 9];
const [x, y, z] = vetor1;

console.log(x);
console.log(y);
console.log(z);

//Funções essenciais para manipulação de arrays
const numeros = [1, 2, 3, 4, 5];

//map --> cria um novo array e executa uma função 
//para cada um dos valores

/*utilizando função arrow*/
const triplo = numeros.map(x => x * 3);

/*utilizando função tradicional*/
function aplica_triplo(x){
  return x * 3;
}

const triplo2 = numeros.map(aplica_triplo);

console.log(triplo);
console.log(triplo2);

//filter --> cria um novo array apenas com elementos 
//que passam no teste

//numeros = [1, 2, 3, 4, 5];
const impares = numeros.filter(x => x % 2 != 0);

const maior_igual_que_tres = numeros.filter(x => x >= 3);

console.log(impares);
console.log(maior_igual_que_tres);


//find --> retorna o primeiro item encontrado no array
const lista_presenca = ['Ana', 'Clara', 'Marcos', 'Pedro'];

const presente = lista_presenca.find(x => x == 'Clara');

console.log(presente != undefined ? 'Presente' : 'AUSENTE');

console.log(4 == 4); //true (compara apenas valor)
console.log(4 == '4');//true (compara apenas valor)


console.log(4 === 4); //true (compara valor e tipo)
console.log(4 === '4');//false (compara valor e tipo)


//Operadores Spread e rest

//spread --> espalha os elementos do array
const cereais = ['Arroz', 'Aveia'];
const carnes = ['Frango', 'Peixe'];

const lista_compras = [...cereais, 'Sabão', ...carnes];

console.log(lista_compras);

//rest --> agrupa os elementos do array

function exibir_lista(item1, ...itens){
  console.log(item1);
  console.log(itens);
}


exibir_lista('Uva', 'Laranja', 'Abacate', 'Pera');




