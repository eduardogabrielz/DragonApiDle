const characters = ['Goku', "Vegeta", "Piccolo", "Bulma", "Freeza", "Zarbon", "Dodoria", 'Ginyu', "Cell", 'Gohan', "Kuririn",
  "Tenshinhan", "Yamcha", "Chi-Chi", "Gotenks", "Trunks", "Mestre Kami", "Bardock", "Launch", "Mr. Satan",
  "Dende", "Android 17", "Android 16", "Android 19", "Android 20 (Dr. Gero)", "Android 13", "Android 14",
  "Android 15", "Nail", "Raditz", "Babidi", "Majin Buu", "Bills", "Whis", "Zeno", "Kibito-Shin", "Jiren",
  "Toppo", "Dyspo", "Marcarita", "Vermoudh", "Sumo Sacerdote", "Kaioh do Norte", "Android 18",
  "Gogeta", "Vegetto", "Janemba", "Broly", "Kaioh do Sul", "Kaioh do Leste", "Kaioh do Oeste", "Grande Kaioh",
  "Kaiohshin do Leste", "Kaiohshin do Norte", "Kaiohshin do Sul", "Kaiohshin do Oeste", "Grande Kaiohshin"];

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

function createModalCorrect(message) {
  const modalDiv = document.createElement('div');
  modalDiv.classList.add('modal');

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('modal_content');

  const messageContainer = document.createElement('div');
  messageContainer.classList.add('grid_close_message');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('grid_message');

  const messageParagraph = document.createElement('p');
  messageParagraph.id = 'mensagem';
  messageParagraph.textContent = message;

  const contentParagraph = document.createElement('p');
  contentParagraph.textContent = `Numero de tentativas: ${responseLineCount}`

  const closeSpan = document.createElement('span');
  closeSpan.classList.add('x');
  closeSpan.textContent = 'X';
  closeSpan.addEventListener('click', function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.parentNode.removeChild(modal);
      inputBox.setAttribute('readonly', true);
    }
  });

  messageContainer.appendChild(messageParagraph);
  messageContainer.appendChild(closeSpan);
  contentContainer.appendChild(contentParagraph);

  const closeButton = document.createElement('button');
  closeButton.classList.add('modal_close');
  closeButton.textContent = 'Reiniciar';
  closeButton.addEventListener('click', function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.parentNode.removeChild(modal);  
      location.reload();
    }
  });

  contentDiv.appendChild(messageContainer);
  contentDiv.appendChild(contentContainer);
  contentDiv.appendChild(closeButton);
  modalDiv.appendChild(contentDiv);
  document.body.appendChild(modalDiv);

}

function createModalWrong(message){
  const modalDiv = document.createElement('div');
  modalDiv.classList.add('modal');

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('modal_content');

  const messageContainer = document.createElement('div');
  messageContainer.classList.add('grid_close_message');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('grid_message');

  const messageParagraph = document.createElement('p');
  messageParagraph.id = 'mensagem';
  messageParagraph.textContent = message;

  const contentParagraph = document.createElement('p');
  contentParagraph.textContent = `O personagem era: ${character.nome}`

  const closeSpan = document.createElement('span');
  closeSpan.classList.add('x');
  closeSpan.textContent = 'X';
  closeSpan.addEventListener('click', function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.parentNode.removeChild(modal);
      inputBox.setAttribute('readonly', true);
    }
  });

  messageContainer.appendChild(messageParagraph);
  messageContainer.appendChild(closeSpan);
  contentContainer.appendChild(contentParagraph);

  const closeButton = document.createElement('button');
  closeButton.classList.add('modal_close');
  closeButton.textContent = 'Tentar Novamente!';
  closeButton.addEventListener('click', function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.parentNode.removeChild(modal);  
      location.reload();
    }
  });

  contentDiv.appendChild(messageContainer);
  contentDiv.appendChild(contentContainer);
  contentDiv.appendChild(closeButton);
  modalDiv.appendChild(contentDiv);
  document.body.appendChild(modalDiv);

}

function guess_character(tip_character, character) {
  responseLineCount++;

  const fields = ["imagem", "nome", "genero", "raça", "afiliação", "Ki"];

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

  const allCorrect = Array.from(responseLineDiv.querySelectorAll('.individual_response_line'))
    .every(element => element.id === 'correct');

  if (allCorrect) {
    createModalCorrect('Que Bom!');
  }

  if (responseLineCount === 5) {
    createModalWrong('Que Pena!')
  }

}

function iniciarGame() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://dragonapidle-production.up.railway.app/iniciar');

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
    } else {
      notification('Erro na requisição: ' +  xhr.status + "" + xhr.statusText);
    }
  };
}

guessButton.addEventListener("click", function () {
  const userInput = searchBox.value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://dragonapidle-production.up.railway.app/palpite/' + userInput);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      const tip_character = JSON.parse(xhr.responseText);
      searchBox.value = "";
      removeCharacter(tip_character.nome);
      guess_character(tip_character, character);
    } else {
      notification('Informe um personagem válido');
    }
  };
});

function notification(e) {
  const audio = new Audio('/static/audio/Error.mp3')
  audio.play();
  Toastify({
    text: e,
    duration: 5000,
    className: "warn",
    gravity: 'bottom',
    style: {
      background: "#ffffff",
      color: "#000000",
      border: "2px solid #0703fc"
    }
  }).showToast();
}
