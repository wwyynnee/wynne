$(".nav__container").on("click", () => {
  $(".nav__elements").css("border-radius", "4px");

  if (
    $(".about").on("click", () => {
      $(".about").css({
        "background-color": "#ffffff20",
        "border-bottom": "solid 3px #636bfc",
        "color": "#636bfc"
      });
    })
  ) {
    $(".price, .portfolio, .contacts").css({
      "color": "",
      "border-bottom": "",
      "background-color": ""
    });
  }
  
  if (
    $(".price").on("click", () => {
      $(".price").css({
        "background-color": "#ffffff20",
        "border-bottom": "solid 3px #636bfc",
        "color": "#636bfc"
      });
    })
  ) {
    $(".about, .portfolio, .contacts").css({
      "color": "",
      "border-bottom": "",
      "background-color": ""
    });
  }
  
  if (
    $(".portfolio").on("click", () => {
      $(".portfolio").css({
        "background-color": "#ffffff20",
        "border-bottom": "solid 3px #636bfc",
        "color": "#636bfc"
      });
    })
  ) {
    $(".about, .price, .contacts").css({
      "color": "",
      "border-bottom": "",
      "background-color": ""
    });
  }
  
  if (
    $(".contacts").on("click", () => {
      $(".contacts").css({
        "background-color": "#ffffff20",
        "border-bottom": "solid 3px #636bfc",
        "color": "#636bfc"
      });
    })
  ) {
    $(".about, .price, .portfolio").css({
      "color": "",
      "border-bottom": "",
      "background-color": ""
    });
  }
})