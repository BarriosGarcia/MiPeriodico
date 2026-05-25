// BOTON SUBIR

const btnSubir = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    btnSubir.style.display = "block";
  }else{
    btnSubir.style.display = "none";
  }

});

btnSubir.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// EFECTO EN CARDS

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0px 10px 30px rgba(255,165,0,0.4)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });

});