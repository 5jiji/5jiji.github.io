let Name = []
let type = []

function GetName() {
    Name.push(document.querySelector('input[id="name"]'))
}

function GetType() {
    type.push(document.querySelector('input[id="name"]'))
}

document.getElementsByClassName("name-submit-button")[0].addEventListener('click', GetName)
document.getElementsByClassName("type-submit-button")[0].addEventListener('click', GetType)