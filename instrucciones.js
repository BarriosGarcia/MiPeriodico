// BOTON SUBIR

const btnSubir = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    btnSubir.style.display = "block";

  }else{

    btnSubir.style.display = "none";

  }

});

// SUBIR ARRIBA

btnSubir.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

// EFECTOS EN TARJETAS

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.boxShadow =
    "0px 10px 30px rgba(0,255,224,0.4)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.boxShadow = "none";

  });

});

// EFECTO MENU

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach((enlace) => {

  enlace.addEventListener("mouseenter", () => {

    enlace.style.transform = "scale(1.1)";

  });

  enlace.addEventListener("mouseleave", () => {

    enlace.style.transform = "scale(1)";

  });

});