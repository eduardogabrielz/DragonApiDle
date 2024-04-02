const characters = ['Goku', "Vegeta", "Piccolo", "Bulma", "Freeza", "Zarbon", "Dodoria", 'Ginyu', "Cell", 'Gohan', "Kuririn",
  "Tenshinhan", "Yamcha", "Chi-Chi", "Gotenks", "Trunks", "Mestre Kami", "Bardock", "Launch", "Mr. Satan",
  "Dende", "Android 17", "Android 16", "Android 19", "Android 20 (Dr. Gero)", "Android 13", "Android 14",
  "Android 15", "Nail", "Raditz", "Babidi", "Majin Buu", "Bills", "Whis", "Zeno", "Kibito-Shin", "Jiren",
  "Toppo", "Dyspo", "Marcarita", "Vermoudh", "Sumo Sacerdote", "Kaioh do Norte", "Android 18",
  "Gogeta", "Vegetto", "Janemba", "Broly", "Kaioh do Sul", "Kaioh do Leste", "Kaioh do Oeste", "Grande Kaioh",
  "Kaioshin do Leste", "Kaioshin do Norte", "Kaioshin do Sul", "Kaioshin do Oeste", "Grande Kaioshin",
  "Kibito"];

const resultBox = document.querySelector(".result_box")
const inputBox = document.getElementById("searchBox")
const guessButton = document.querySelector(".guess_character")
let character = "";
let tip_character = "";
let responseLineCount = 0;


function removeCharacter(characterName) {
  const characterIndex = characters.indexOf(characterName);
  if (characterIndex !== -1) {
    characters.splice(characterIndex, 1);
  }
}

inputBox.onkeyup = function () {
  let result = []
  let input = inputBox.value;
  if (input.length) {
    result = characters.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }

  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
}

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}

function guess_character(tip_character, character) {
  responseLineCount++;
  const fields = ["imagem", "nome", "raça", "afiliação", "genero"];

  const responseLineDiv = document.querySelector(`.response_line${responseLineCount}`);
  responseLineDiv.style.display = 'flex';

  for (const field of fields) {
    const div = document.createElement('div');
    div.classList.add('individual_response_line');

    const content = document.createElement(field === "imagem" ? 'img' : 'p');
    content.classList.add(field === "imagem" ? 'image_character' : 'tip_character');

    if (field === "imagem") {
      content.src = tip_character[field];
      content.alt = "Personagem do palpite";
    } else {
      content.textContent = tip_character[field];
    }

    div.id = tip_character[field] === character[field] ? 'correct' : 'wrong';

    div.appendChild(content);
    responseLineDiv.appendChild(div);
  }
}



function iniciarGame() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:5000/iniciar');

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      const resposta = JSON.parse(xhr.responseText);
      document.querySelector(".section").style.display = "none";
      document.querySelector(".search_box").style.display = "block";
      document.querySelector(".header").style.display = "flex";
      document.querySelector(".header_content_characteristics").style.display = "flex";
      character = resposta;
      console.log(character);
    } else {
      console.error('Erro na requisição:', xhr.status, xhr.statusText);
    }
  };
}

guessButton.addEventListener("click", function () {
  const userInput = searchBox.value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:5000/palpite/' + userInput);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      const tip_character = JSON.parse(xhr.responseText);
      searchBox.value = "";
      console.log(tip_character)
      removeCharacter(tip_character.nome); 
      guess_character(tip_character, character);
    } else {
      console.error('Erro na requisição:', xhr.status, xhr.statusText);
    }
  };
});

