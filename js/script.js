// front page
var btn = document.getElementById("btn");

setTimeout(function () {
  btn.style.opacity = "1";
}, 2000);

$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

// quiz page
function verificarRespostas() {
  var resposta1 = document.getElementById("pergunta1").value;
  var resposta2 = document.getElementById("pergunta2").value;
  var resposta3 = document.getElementById("pergunta3").value;
  var resposta4 = document.getElementById("pergunta4").value;
  var resposta5 = document.getElementById("pergunta5").value;
  var resposta6 = document.getElementById("pergunta6").value;
  var resposta7 = document.getElementById("pergunta7").value;

  if (
    (resposta1 == "29/01" || resposta1 == "29 de janeiro") &&
    (resposta2 == "you&me" || resposta2 == "you & me") &&
    (resposta3 == "tucuruvi" || resposta3 == "Tucuruvi") &&
    (resposta4 == "08/09/23" || resposta4 == "08 de setembro de 2023") &&
    (resposta5 == "nana" ||
      resposta5 == "Nana" ||
      resposta5 == "Nanah" ||
      resposta5 == "nanah") &&
    (resposta6 == "10" || resposta6 == "10 meses") &&
    (resposta7 == "casar comigo" ||
      resposta7 == "casar com a nataly" ||
      resposta7 == "casar cmg")
  ) {
    document.getElementById("resultado").innerText =
      "OOOOOWN Q FOFO MEU AMOR, C ACERTOU TODAAAAAS, PARABENS!!!  me manda uma print q vc conseguiu... eu tenho uma surpresa pra vc- 🤫💗";
  } else {
    document.getElementById("resultado").innerText =
      "QUE ISSO NATALY?? TENTA DNV VAI 🤡🤦‍♂️";
  }
}

// carousel page
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
