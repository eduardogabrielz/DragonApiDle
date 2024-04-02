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
    "Gran Kaio" : "Grande Kaioh",
    "Kaio-shin del Este" : "Kaiohshin do Leste",
    "Kaio-shin del Norte" : "Kaiohshin do Norte",
    "Kaio-shin del Sur" : "Kaiohshin do Sul",
    "Kaio-shin del Oeste" : "Kaiohshin do Oeste",
    "Gran Kaio-shin" : "Grande Kaiohshin"
}

def translate_character(character):

  translated = {}
  translated["nome"] = translation_names.get(character["nome"], character["nome"])
  translated["genero"] = translation_genders.get(character["genero"], character["genero"])
  translated["raça"] = translation_races.get(character["raça"], character["raça"])
  translated["afiliação"] = translation_affiliations.get(character["afiliação"], character["afiliação"])
  translated["imagem"] = character["imagem"]
  
  return translated