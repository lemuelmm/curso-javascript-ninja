<script>
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b){
    return(a+b);
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var asoma= soma(10, 5) + 5;

// Qual o valor atualizado dessa variável?
console.log(20);

// Declare uma nova variável, sem valor.
var no;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addvalor(a){
    a = Number( Math.random() * 9 + 1);
    return console.log("O valor da variável agora é " + a);
}


// Invoque a função criada acima.
addvalor(no);

// Qual o retorno da função? (Use comentários de bloco).
//random

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiply(a,b,c){
    if(a == null || b == null || c == null){
        return console.log("Preencha todos os valores corretamente!");
    }else{var result = ((a*b*c)+2); return console.log(result);}
}

// Invoque a função criada acima, passando só dois números como argumento.
var a=10, b=20, c;
var test = multiply(a, b, c);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
c=2;
var test2 = multiply(a, b, c);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//402

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
a=null, b=null, c=null;
function fun(a,b,c){
    if(a==null && b==null && c==null){return console.log('false');
    }else if(a!=null && b==null && c==null){return console.log(a);
    }else if(a==null && b!=null && c==null){return console.log(b);
    }else if(a==null && b==null && c!=null){return console.log(c);
    }else if(a!=null && b!=null && c==null){ return console.log(a+b);
    }else if(a!=null && b==null && c!=null){ return console.log(a+c);
    }else if(a==null && b!=null && c!=null){ return console.log(c+b);
    }else if(a!=null && b!=null && c!=null){return console.log((a+b)/c)
    }else{ return console.log(null);}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
a=1;
test = fun(a);
b=2;
test = fun(a,b);
c=3;
test = fun(a,b,c);
test = fun();

</script>
