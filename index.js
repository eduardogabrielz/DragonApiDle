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

inputBox.onkeyup = function () {
  let result = []
  let input = inputBox.value;
  if (input.length) {
    result = characters.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  
  display(result);

  if(!result.length){
    resultBox.innerHTML = "";
  }
}

function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
function iniciarGame() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:5000/iniciar');

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send();

  xhr.onload = function() {
    if (xhr.status === 200) {
      const resposta = JSON.parse(xhr.responseText);
      document.querySelector(".section").style.display = "none";
      document.querySelector(".search_box").style.display = "block";
      document.querySelector(".header").style.display = "flex";
      document.querySelector(".header_content_characteristics").style.display = "flex";
      document.querySelector(".response_line").style.display = "flex";
      console.log(resposta); 
    } else {
      console.error('Erro na requisição:', xhr.status, xhr.statusText);
    }
  };
}

function teste(character){
  console.log(character)
}