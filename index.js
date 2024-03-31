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

function guess_character(character){
  
  responseLineCount++;
  
  const div_image = document.createElement('div');
  div_image.classList.add('individual_response_line');

  const div_name = document.createElement('div');
  div_name.classList.add('individual_response_line');

  const div_gender = document.createElement('div');
  div_gender.classList.add('individual_response_line');

  const div_race = document.createElement('div');
  div_race.classList.add('individual_response_line');

  const div_afiliation = document.createElement('div');
  div_afiliation.classList.add('individual_response_line');
  
  const imageCharacter = document.createElement('img');
  imageCharacter.classList.add('image_character');
  imageCharacter.src = character.imagem;
  imageCharacter.alt = "Personagem do palpite";

  const nameCharacter = document.createElement('p');
  nameCharacter.classList.add('tip_character');
  nameCharacter.textContent = character.nome;

  const genderCharacter = document.createElement('p');
  genderCharacter.classList.add('tip_character');
  genderCharacter.textContent = character.genero;

  const raceCharacter = document.createElement('p');
  raceCharacter.classList.add('tip_character');
  raceCharacter.textContent = character.raça;

  const afiliationCharacter = document.createElement('p');
  afiliationCharacter.classList.add('tip_character');
  afiliationCharacter.textContent = character.afiliação;

  div_image.appendChild(imageCharacter);
  div_name.appendChild(nameCharacter);
  div_gender.appendChild(genderCharacter);
  div_race.appendChild(raceCharacter);
  div_afiliation.appendChild(afiliationCharacter);

  const responseLineDiv = document.querySelector(`.response_line${responseLineCount}`);
  
  responseLineDiv.appendChild(div_image);
  responseLineDiv.appendChild(div_name);
  responseLineDiv.appendChild(div_gender);
  responseLineDiv.appendChild(div_race);
  responseLineDiv.appendChild(div_afiliation);

  responseLineDiv.style.display = 'flex';
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
      console.log(resposta);
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
      const resposta = JSON.parse(xhr.responseText);
      tip_character = resposta;
      searchBox.value = "";
      console.log(tip_character)
      guess_character(tip_character);
    } else {
      console.error('Erro na requisição:', xhr.status, xhr.statusText);
    }
  };
});

