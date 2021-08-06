let pierre = document.getElementById("pierre");
pierre.addEventListener("click", partie, true);
let feuille = document.getElementById("feuille");
 feuille.addEventListener("click", partie2, true);
let ciseau = document.getElementById("ciseau");
ciseau.addEventListener("click", partie3, true);
let start = document.getElementById("start");
let scoreJoueur = document.getElementById("scoreJoueur");
let conteJoueur;
let scoreOrdi = document.getElementById("scoreOrdi");
let conteOrdi;
let choixOrdi;
start.addEventListener("click", jeux, true);

function jeux() {
  pierre.style.display = "inline";
  feuille.style.display = "inline";
    ciseau.style.display = "inline";
    conteOrdi = 0;
    conteJoueur = 0;
}


function partie() {
  let choix = Math.round(Math.random(1) * 2);

  if (choix === 2) {
    conteJoueur = conteJoueur + 1;
  } else {
    conteOrdi = conteOrdi + 1;
  }
  
  scoreJoueur.innerText = conteJoueur;
  scoreOrdi.innerText = conteOrdi;
}

function partie2() {
  let choix = Math.round(Math.random(1) * 2);

  if (choix === 1) {
    conteJoueur = conteJoueur + 1;
  } else {
    conteOrdi = conteOrdi + 1;
  }

  scoreJoueur.innerText = conteJoueur;
  scoreOrdi.innerText = conteOrdi;
}
function partie3() {
  let choix = Math.round(Math.random(1) * 2);

  if (choix === 0) {
    conteJoueur = conteJoueur + 1;
  } else {
    conteOrdi = conteOrdi + 1;
  }

  scoreJoueur.innerText = conteJoueur;
  scoreOrdi.innerText = conteOrdi;
}