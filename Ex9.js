var ano = prompt("Digite o ano")

if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
    console.log("Ano bissexto")
}

else{
    console.log("ano não é bissexto")
}