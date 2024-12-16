// RECURSIVIDADE
function fatorial(n){
    if(n == 1) {
        return 1
    }else {
        return n * fatorial(n - 1)
     }
}
console.log(fatorial(5))

/*5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/

/*eu posso ainda fazer o fatorial de outra maneira, de uma maneira recursiva. Uma recursão ela acontece quando uma função chamada ela mesma, e eu vou fazer o seguinte aqui, fatorial é o nome da minha função vou colocar aqui: function fatorial (n) e agora eu faço o seguinte vamos raciocinar aqui, existe uma possibilidade que é a seguinte forma recursiva, 5 fatorial é a mesma coisa que 5x4x3x2x1, a gente fez isso só que se você parar para analisar 4x3x2x1 é 4 fatorial, então eu posso reescrever que 5 fatorial é a mesma coisa que 5x4!, isso é, o fatorial de um número pode ser calculado baseado num fatorial de outro, por exemplo se eu tenho de forma genérica o fatorial de n esse fatorial de n é sempre n! = n x (n-1)! a não ser que seja um fator é o de 1, porque a gente sabe que matematicamente o fatorial de 1 é 1.
Baseado nesses conceitos, eu consigo fazer uma função recursiva da seguinte maneira : if (n==1) isso é, se estou tentando calcular o fatorial de 1, que é esse aqui, eu sei que o resultado é um, então return 1 agora se não for um que não é essa regra daqui, ela vai seguir essa regra daqui que o fatorial do número é: return n* fatorial (n-1), então olha só o que está acontecendo aqui, eu estou criando a função fatorial que dentro dela, ela possui uma chamada para ela mesma, olha isso, eu um tenho fatorial que chama fatorial aqui dentro.
Isso que a gente está fazendo é o que a gente chama de Recursividade, isso é um conceito um pouco mais complicado, vou colocar aqui: console.log(fatorial(5)), o mesmo fatorial que a gente fez antes, executando ele tem que mostrar 120 também.
Então fatorial, cálculo de fatorial, um exemplo: funciona da maneira recursiva e funciona da maneira tradicional */