/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [2, 4, 5, 7, 10];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function verArray(aray){
    return aray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myVar[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function findIndice(aray = [], int){
    return aray[int];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var my2Var = [2, 3, 4, 5, 7];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(findIndice(my2Var, 0));
console.log(findIndice(my2Var, 1));
console.log(findIndice(my2Var, 2));
console.log(findIndice(my2Var, 3));
console.log(findIndice(my2Var, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var nomeLivro = {
        'CrimeAndPunishment' : {
            quantidadePaginas : "700",
            autor : "Foucault",
            editora : "SuaMae"
        },
        'OProcesso' : {
            quantidadePaginas : "150",
            autor : "Franz Kafka",
            editora : "SuaMaezona"
        },
        'VadeMecum' : {
            quantidadePaginas : "7000",
            autor : "Temer",
            editora : "Saraiva"
        }
    }
    return (nomeLivro[nome]) ? nomeLivro[nome] : nomeLivro; 

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('OProcesso'));
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro O Processo têm " + book('OProcesso').quantidadePaginas);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro O Processo é " + book('OProcesso').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro O Processo foi publicado pela editora " + book('OProcesso').editora + ".");
