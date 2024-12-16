function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c --){
        fat *= c 
    }
    return fat
}

console.log(fatorial(5))

//5! = 5 x 4 x 3 x 2 x 1

/*vamos calcular o fatorial de um número, fatorial é o número é o seguinte vou colocar aqui: 5 fatorial é a mesma coisa que 5x4x3x2x1, vou fazer o seguinte: function fatorial(n){ - e vai retornar o fator desse número, vamos fazer o seguinte  aqui: vou criar uma variável chamada fat
e essa variável fat recebe 1 (let fat = 1),
vou fazer um for e vou ter o meu contador começando em n e enquanto o contador for maior do que 1, o contador perde 1 (for(let c = n; c > 1; c--)), porque eu quero fazer o seguinte, se eu passar 5 aqui ele vai começar em 5 e vai perdendo 1 até chegar 1, está vendo aqui? a gente viu isso nas aulas de repetição, e o meu fatorial vai receber o fatorial vezes o c (fat *= c), no final eu dou return fat (return fat) , só como curiosidade o fato real de 5 é 120, vamos colocar console.lo(fatorial(5)), vamos ver ele vai mostrar 120, executando e olha lá 120.
 

 */