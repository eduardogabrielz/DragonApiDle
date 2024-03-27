def choose(characters):
    
    result_character = {}
  
    result_character["nome"] = characters["name"]
    result_character["genero"] = characters["gender"]
    result_character["raça"] = characters["race"]
    result_character["afiliação"] = characters["affiliation"]
    origin_planet = characters["originPlanet"]
    result_character["planeta"] = origin_planet["name"] if origin_planet else None
    result_character["imagem"] = characters["image"]

    return result_character

