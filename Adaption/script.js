let inputCode, NbrEssais = 0;
let code = `${Math.floor(Math.random() * 8999) + 1000}`;
const info = document.getElementsByClassName("info")[0];

document.getElementsByClassName("code")[0].innerHTML = `Code: ${code}`;

function confirmCode() {
  inputCode = document.getElementsByClassName('password')[0].value;
  
  if (inputCode === ""){
    info.innerHTML = `Veillez mettre un nombre, Il vous reste ${3 - NbrEssais} essai(s)`;
    info.classList.remove("green");
    info.classList.remove("red");
    return;
  };
  
  if (inputCode === code) return correctCode();
  else return errorCode();
};

function errorCode() {

  NbrEssais += 1;
  
  info.innerHTML = `Faux! Il vous reste ${3 - NbrEssais} essais!`;
  info.classList.add("red");
  info.classList.remove("green");
  
  document.getElementsByClassName("img")[0].classList.add("hidden");
  if (NbrEssais >= 3) {
    document.getElementsByClassName("p_password")[0].classList.add("hidden");
    document.getElementsByClassName("restart")[0].classList.remove("hidden");
    info.innerHTML = "Vous n'avez plus d'essais, Vous avez PERDU !";
  };
};

function correctCode() {
  info.classList.add("green");
  info.classList.remove("red");
  
  info.innerHTML = "Bravo ! Vous avez trouvé le bon mots de passe !";
  
  document.getElementsByClassName("img")[0].classList.remove("hidden");
  document.getElementsByClassName("p_password")[0].classList.remove("hidden");
  document.getElementsByClassName("restart")[0].classList.add("hidden");
};

function restartGame() {
  NbrEssais = 0;
  code = `${Math.floor(Math.random() * 8999) + 1000}`;
  
  info.classList.remove("green");
  info.classList.remove("red");
  
  document.getElementsByClassName("code")[0].innerHTML = `Code: ${code}`;
  info.innerHTML = "Un nouveaux mots de passe a été généré !"

  document.getElementsByClassName("p_password")[0].classList.remove("hidden");
  document.getElementsByClassName("restart")[0].classList.add("hidden");
};


document.getElementsByClassName("restart")[0].addEventListener('click', restartGame);
document.getElementById("submit").addEventListener('click', confirmCode);