function verificarRespostas() {
    var resposta1 = document.getElementById("pergunta1").value;
    var resposta2 = document.getElementById("pergunta2").value;
    var resposta3 = document.getElementById("pergunta3").value;
    var resposta4 = document.getElementById("pergunta4").value;
    var resposta5 = document.getElementById("pergunta5").value;
    var resposta6 = document.getElementById("pergunta6").value;
    
    if ((resposta1 == "29/01" || resposta1 == "29 de janeiro") &&
        (resposta2 == "you&me" || resposta2 == "you & me") &&
        (resposta3 == "tucuruvi" || resposta3 == "Tucuruvi") &&
        (resposta4 == "08/09/23" || resposta4 == "08 de setembro de 2023") &&
        (resposta5 == "nana" || resposta5 == "Nana" || resposta5 == "Nanah" || resposta5 == "nanah" ) &&
        (resposta6 == "10" || resposta6 == "10 meses")) {
        document.getElementById("resultado").innerText = "OOOOOWN Q FOFO MEU AMOR, C ACERTOU TODAAAAAS, PARABENS!!!  me manda uma print q vc conseguiu... eu tenho uma surpresa pra vc- 🤫💗";
    } else {
        document.getElementById("resultado").innerText = "QUE ISSO NATALY?? TENTA DNV VAI 🤡🤦‍♂️";
    }
}