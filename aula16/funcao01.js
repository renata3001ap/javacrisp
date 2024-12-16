function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
console.log(parimpar(223))

/*então o que eu fiz foi o seguinte: aqui é a minha chamada, 223 é o meu parâmetro, esse parâmetro real aqui vai ser jogado dentro desse parâmetro formal n através da chamada, o n está valendo 223, 223 dividido por 2 dá resto 1 então ele não vai retornar o par, ele vai retornar o ímpar. Isso aqui é meu retorno que vai ser jogado no console.log, então ele mostrou o ímpar na tela.*/