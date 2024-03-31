detranslation_names = {
    "Freeza" : "Freezer",
    "Cell" : "Celula",
    "Kuririn" : "Krillin",
    "Mestre Kami" : "Master Roshi",
    "Sumo Sacerdote": "Grand Priest",
    "Kaioh do Norte": "Kaio del norte (Kaito)",
    "Kaioh do Sul": "Kaio del Sur",
    "Kaioh do Leste": "Kaio del este",
    "Kaioh do Oeste": "Kaio del Oeste",
    "Grande Kaioh": "Gran Kaio",
    "Kaiohshin do Leste": "Kaio-shin del Este",
    "Kaiohshin do Norte": "Kaio-shin del Norte",
    "Kaiohshin do Sul": "Kaio-shin del Sur",
    "Kaiohshin do Oeste": "Kaio-shin del Oeste",
    "Grande Kaioshin": "Gran Kaio-shin",
}

def destranslation_character(character):

  if character in detranslation_names:
    return detranslation_names[character]
  else:
    return character

