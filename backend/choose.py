def choose(characters):
    
    result_character = {}
  
    result_character["nome"] = characters["name"]
    result_character["genero"] = characters["gender"]
    result_character["raça"] = characters["race"]
    result_character["afiliação"] = characters["affiliation"]
    result_character["imagem"] = characters["image"]

    return result_character

