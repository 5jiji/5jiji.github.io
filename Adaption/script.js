let inputCode, NbrEssais = 0;
let chiffre1 = 0, chiffre2 = 0, chiffre3 = 0, chiffre4 = 0;
const info = document.getElementsByClassName("info")[0];

function Generatingcode() {
  chiffre1 = Math.floor(Math.random() * 9)
  chiffre2 = Math.floor(Math.random() * 9)
  chiffre3 = Math.floor(Math.random() * 9)
  chiffre4 = Math.floor(Math.random() * 9)

  code = [chiffre1, chiffre2, chiffre3, chiffre4].join("")
}

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

function errorCode() {

  NbrEssais += 1;

  info.innerHTML = `Faux! Il vous reste ${3 - NbrEssais} essais!`;
  info.classList.add("red");
  info.classList.remove("green");

  if (NbrEssais >= 3) {
    document.getElementsByClassName("p_password")[0].classList.add("hidden");
    document.getElementsByClassName("restart")[0].classList.remove("hidden");
    info.innerHTML = "Vous n'avez plus d'essais, Vous avez PERDU !";
    Image("red", false)
  };
};

function correctCode() {
  info.classList.add("green");
  info.classList.remove("red");

  info.innerHTML = "Bravo ! Vous avez trouvé le bon mots de passe !";

  document.getElementsByClassName("p_password")[0].classList.remove("hidden");
  document.getElementsByClassName("restart")[0].classList.add("hidden");
  Image("green", true)
};

function restartGame() {
  NbrEssais = 0;
  Generatingcode()
  info.classList.remove("green");
  info.classList.remove("red");

  document.getElementsByClassName("code")[0].innerHTML = `Code: ${code}`;
  info.innerHTML = "Un nouveaux mots de passe a été généré !"

  document.getElementsByClassName("p_password")[0].classList.remove("hidden");
  document.getElementsByClassName("restart")[0].classList.add("hidden");
  Image(orange, false)
};

function Image(color, true_false) {
  document.getElementsByClassName("green")[0].classList.add("hidden")
  document.getElementsByClassName("red")[0].classList.add("hidden")
  document.getElementsByClassName("orange")[0].classList.add("hidden")

  document.getElementsByClassName(color)[0].classList.remove("hidden")
  if (true_false) {
    setTimeout(document.getElementsByClassName(color)[0].classList.add("hidden"), 3)
  }
}

Generatingcode()
document.getElementsByClassName("code")[0].innerHTML = `Code: ${code}`;

document.getElementsByClassName("restart")[0].addEventListener('click', restartGame);
document.getElementById("submit").addEventListener('click', confirmCode);