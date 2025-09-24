let resposta = document.getElementById('resposta')

function principal(){
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)

    let media = (nota1 + nota2 + nota3) / 3.0

    console.log(`As notas do aluno são: ${nota1} ${nota2} ${nota3}`)
    console.log(`A média do aluno foi: ${media.toFixed(2)}`)

    if (media < 5.0){
        resposta.innerHTML = `Você não alcançou a média: REPROVADO <br>`
    }else if(media >= 5.0 && media < 7.0){
        resposta.innerHTML = `Precisa fazer a RECUPERAÇÃO <br>`
    }else if(media >= 7.0){
        resposta.innerHTML = `Você está APROVADO, Parabéns! <br>`
    }

    //  resposta.innerHTML = ``
     resposta.innerHTML += `As notas do aluno são: ${nota1}, &nbsp ${nota2}, &nbsp ${nota3} <br>`
     resposta.innerHTML += `A média do aluno foi: ${media.toFixed(2)}`
}
