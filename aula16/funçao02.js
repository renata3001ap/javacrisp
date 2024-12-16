function soma (n1, n2) {
    return n1 + n2
}
console.log(soma(2, 5))

/*então a soma de 2 + 5 é 7, então basicamente o que ele vai fazer aqui,essa é a minha chamada, soma 2 e 5 são meus parâmetros, são dois parâmetro, então 2 vai vir pro primeiro parâmetro (n1) e o 5 vai vir para o segundo parâmetro (n2).
Então tenho n1 valendo 2 e n2 valendo 5 pro exemplo aqui, pra esse par de parâmetros, vai ficar 2+5 igual à 7, ele vai retornar o parâmetro, então tudo isso aqui vai valer 7 que foi a minha chamada inteira vai valer n1 + n2, o que eu vou fazer com esse 7? Escrever na tela, então na tela, então se eu executar ele vai mostrar o 7 na tela.
 Só que a gente tem um pequeno problema e se por acaso eu não mandar 2, se eu mandar soma 2(console.log(soma(2))? Eu não mandei dois parâmetros o 2 vai vir pra dentro do n1 e o n2 vai ficar como undefined do javaScript que significa indefinido (não definido), se eu executar aqui, f8, ele mostrou 'not a number', isso é não é um número,não é um número porque ficou como 2 e indefinido, 2 mais indefinido no javaScript é 'NAN' que é "not a number", não é um número só que eu posso resolver isso,por exemplo: se eu por acaso não passar o n1 eu quero que ele considere 0 olha que maneira que eu posso fazer
 function soma(n1=0, n2){
    return n1 + n2
 }
    console.log(soma(2))
 são os parâmetros já pré-definidos, são parâmetro os opcionais, se o n1 não for passado é 0, se o n2 não for passado é 0, então se eu colocar aqui (console.log(soma(7 , 3)))  o n1 não vai ficar valendo 0, vai ficar valendo 7, o n2 não vai ficar valendo 0 vai ficar no 3 e ele vai mostrar 10 na tela.
 Agora se eu passar só o (console.log(soma(7))) que estava dando not a number antes agora ele vai me dar simplesmente 7, porque? Porque eu mandei somar 7 com nada, 7 com nada dá 7, então esses parâmetros opcionais do javaScript são úteis para você.
 */