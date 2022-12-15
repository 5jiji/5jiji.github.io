const delay = (n) => new Promise( r => setTimeout(r, n*1000));

function confirmCode() {
  inputCode = document.getElementsByClassName('password')[0].value;

  if (inputCode === "") {
    info.innerHTML = `Veillez mettre un nombre, Il vous reste ${3 - NbrEssais} essai(s)`;
    info.classList.remove("green");
    info.classList.remove("red");
    return;
  } else if (inputCode === code) return correctCode();
  else return errorCode();
};

async function errorCode() {
  NbrEssais += 1;

  info.innerHTML = `Faux! Il vous reste ${3 - NbrEssais} essais!`;
  info.classList.add("red");
  info.classList.remove("green");

  document.getElementsByClassName("p_password")[0].classList.add("hidden");

  await delay(3);

  document.getElementsByClassName("p_password")[0].classList.remove("hidden");


  if (NbrEssais >= 3) {
    document.getElementsByClassName("p_password")[0].classList.add("hidden");
    document.getElementsByClassName("restart")[0].classList.remove("hidden");
    info.innerHTML = "Vous n'avez plus d'essais, Vous avez PERDU !";

    await delay(2);
  };
};

function correctCode() {
  info.innerHTML = "Bravo ! Vous avez trouvé le bon mots de passe !";
  info.classList.add("green");
  info.classList.remove("red");

  document.getElementsByClassName("p_password")[0].classList.add("hidden");
  document.getElementsByClassName("restart")[0].classList.remove("hidden");

  Image("g", false);
};

function restartGame() {
  NbrEssais = 0;
  Generatingcode();
  info.classList.remove("green");
  info.classList.remove("red");

  document.getElementsByClassName("code")[0].innerHTML = `Code: ${code}`;
  info.innerHTML = "Un nouveaux nombre a été généré!";

  document.getElementsByClassName("p_password")[0].classList.remove("hidden");
  document.getElementsByClassName("restart")[0].classList.add("hidden");
};

function Generatingcode() {
  chiffre1 = Math.floor(Math.random() * 9);
  chiffre2 = Math.floor(Math.random() * 9);
  chiffre3 = Math.floor(Math.random() * 9);
  chiffre4 = Math.floor(Math.random() * 9);

  code = [chiffre1, chiffre2, chiffre3, chiffre4].join("");
}

let inputCode, NbrEssais = 0;
let chiffre1 = 0, chiffre2 = 0, chiffre3 = 0, chiffre4 = 0;
const info = document.getElementsByClassName("info")[0];

Generatingcode()
document.getElementsByClassName("code")[0].innerHTML = `Que donerait x = ${code}?`;

document.getElementsByClassName("restart")[0].addEventListener('click', restartGame);
document.getElementById("submit").addEventListener('click', confirmCode);