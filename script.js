var btn = document.getElementById("btn");

  setTimeout(function () {
      btn.style.opacity = "1";
  }, 1000);

  btn.addEventListener("click", function () {
    window.location.href = "choice/choice.html";
});

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


