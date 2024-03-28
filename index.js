const characters = ['Goku', "Vegeta", "Piccolo", "Bulma", "Freeza", "Zarbon", "Dodoria", 'Ginyu', "Cell", 'Gohan', "Kuririn",
  "Tenshinhan", "Yamcha", "Chi-Chi", "Gotenks", "Trunks", "Mestre Kami", "Bardock", "Launch", "Mr. Satan",
  "Dende", "Android 17", "Android 16", "Android 19", "Android 20 (Dr. Gero)", "Android 13", "Android 14",
  "Android 15", "Nail", "Raditz", "Babidi", "Majin Buu", "Bills", "Whis", "Zeno", "Kibito-Shin", "Jiren",
  "Toppo", "Dyspo", "Marcarita", "Vermoudh", "Sumo Sacerdote", "Kaioh do Norte", "Android 18",
  "Gogeta", "Vegetto", "Janemba", "Broly", "Kaioh do Sul", "Kaioh do Leste", "Kaioh do Oeste", "Grande Kaioh",
  "Kaioshin do Leste", "Kaioshin do Norte", "Kaioshin do Sul", "Kaioshin do Oeste", "Grande Kaioshin",
  "Kibito"];

const searchBox = document.getElementById('searchBox');
const suggestions = document.getElementById('suggestions');
let isFocused = false;
const MAX_SUGGESTIONS = 10;
    
searchBox.addEventListener('focus', () => {
  isFocused = true;
});

searchBox.addEventListener('blur', () => {
  isFocused = false;
  suggestions.innerHTML = '';
});

searchBox.addEventListener('input', () => {
  if (isFocused) {
    const filterText = searchBox.value.toLowerCase().trim();

    if (filterText !== '') {
      const filteredCharacters = characters.filter(character => character.toLowerCase().includes(filterText));

      suggestions.innerHTML = '';

      // Limit the number of displayed suggestions
      for (let i = 0; i < Math.min(filteredCharacters.length, MAX_SUGGESTIONS); i++) {
        const character = filteredCharacters[i];
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('suggestion');
        suggestionElement.textContent = character;
        suggestions.appendChild(suggestionElement);
      }
    } else {
      suggestions.innerHTML = '';
    }
  }
});
