def choose_features(characters):
    
    result_character = {}
  
    result_character["nome"] = characters["name"]
    result_character["genero"] = characters["gender"]
    result_character["raça"] = characters["race"]
    result_character["afiliação"] = characters["affiliation"]
    result_character["imagem"] = characters["image"]

    return result_character

def choose_features_tips(characters):

  character_data = characters[0]  

  result_character = {}
  result_character["nome"] = character_data["name"]
  result_character["genero"] = character_data["gender"]
  result_character["raça"] = character_data["race"]
  result_character["afiliação"] = character_data["affiliation"]
  result_character["imagem"] = character_data["image"]

  return result_character