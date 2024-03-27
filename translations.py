translation_planets = {
    "Tierra" : "Terra",
    "Planeta de Bills " : "Planeta do Bills",
    "Nucleo del Mundo" : "Núcleo do Mundo",
    "Planeta del Gran Kaio" : "Planeta do Supremo Senhor Kaio",
    "Freezer No. 79" : "Planeta Freeza 79",
    "Otro Mundo" : "Outro Mundo",
    "Kaiō del Norte" : "Planeta do Senhor Kaioh",
    "Planeta sagrad": "Planeta Sagrado de Kaiohshin",
}

translation_genders = {
    "Male" : "Homen",
    "Female" : "Mulher",  
}

translation_races = {
    "God" : "Deus",
    "Saiyan" : "Saiyajin",
    "Angel" : "Anjo",
    "Nucleico" : "Shin-jin",
    "Evil" : "Demonio",
    "Namekian" : "Namekuseijin",
    "Human" : "Humano",
    "Frieza Race" : "Raça do Freeza",
    "Unknown" : "Desconhecido",
    "Jiren Race" : "Humanoide",
    "Nucleico benigno" : "Shin-jin"
}

translation_affiliations = {
    "Villain" : "Vilão",
    "Z Fighter" : "Guerreiros Z",
    "Other" : "Outro",
    "Army of Frieza" : "Guerreiros do Freeza",
    "Freelancer" : "Autonomo",
    "Assistant of Beerus" : "Assistente do Bills",
    "Pride Troopers" : "Tropa do Orgulho",
    "Assistant of Vermoud" : "Assistente do Vermoudh",
}

translation_names = {
    "Marcarita " : "Marcarita",
    "Freezer" : "Freeza",
    "Celula" : "Cell",
    "Krillin" : "Kuririn",
    "Master Roshi" : "Mestre Kami",
    "Grand Priest " : "Sumo Sacerdote",
    "Kaio del norte (Kaito)" : "Kaioh do Norte",
    "Kaio del Sur" : "Kaioh do Sul",
    "Kaio del este" : "Kaioh do Leste",
    "Kaio del Oeste" : "Kaioh do Oeste",
    "Gran Kaio" : "Supremo Kaioh",
    "Kaio-shin del Este" : "Kaiohshin do Leste",
    "Kaio-shin del Norte" : "Kaiohshin do Norte",
    "Kaio-shin del Sur" : "Kaiohshin do Sul",
    "Kaio-shin del Oeste" : "Kaioshin do Oeste",
    "Gran Kaio-shin" : "Supremo Kaioshin"
}

def translate_character(character):

  translated = {}
  translated["nome"] = translation_names.get(character["nome"], character["nome"])
  translated["genero"] = translation_genders.get(character["genero"], character["genero"])
  translated["raça"] = translation_races.get(character["raça"], character["raça"])
  translated["afiliação"] = translation_affiliations.get(character["afiliação"], character["afiliação"])
  planet = character["planeta"]
  translated["planeta"] = translation_planets.get(planet, planet)
  translated["imagem"] = character["imagem"]
  
  return translated