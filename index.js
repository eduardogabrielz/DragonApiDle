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
    console.log(result)
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