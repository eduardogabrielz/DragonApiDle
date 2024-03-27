from flask import Flask, jsonify, request
import requests
import random

character = ['Goku', "vegeta", "Piccolo", "Bulma", "Freezer", "Zarbon", "Dodoria", 'Ginyu', "Celula", 'Gohan', "Krillin",
             "Tenshinhan", "Yamcha", "Chi-Chi", "Gotenks", "Trunks", "Master Roshi", "Bardock", "Launch", "Mr. Satan",
             "Dende", "Android 17", "Android 16", "Android 19", "Android 20 (Dr. Gero)", "Android 13", "Android 14",
             "Android 15", "Nail", "Raditz", "Babidi", "Majin Buu", "Bills", "Whis", "Zeno", "Kibito-Shin", "Jiren",
             "Toppo", "Dyspo", "Marcarita", "Vermoudh", "Grand Priest", "Kaio del norte (Kaito)", "Android 18",
             "Gogeta", "Vegetto", "Janemba", "Broly", "Kaio del Sur", "Kaio del este", "Kaio del Oeste", "Gran Kaio",
             "Kaio-shin del Este", "Kaio-shin del Norte", "Kaio-shin del Sur", "Kaio-shin del Oeste", "Gran Kaio-shin",
             "Kibito"]

translation_planets = {
    "Tierra" : "Terra",
    "Planeta de Bills " : "Planeta do Bills",
    "Nucleo del Mundo" : "Núcleo do Mundo",
    "Planeta del Gran Kaio" : "Planeta do Grande Senhor Kaio",
    "Freezer No. 79" : "Planeta Freeza 79",
    "Otro Mundo" : "Outro Mundo",
    "Kaiō del Norte" : "Planeta do Senhor Kaioh",
    "Planeta sagrad": "Planeta Sagrado de Kaiohshin",
}

translation_genders = {
    "Male" : "Homen",
    "Female" : "Mulher",  
}

translation_race = {
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


app = Flask(__name__)

@app.route('/jogar', methods=['GET'])
def jogar():
    
    base_url = "https://dragonball-api.com/api/characters/"   
    
    invalid_ids = [62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 41, 36]

    while True:
        random_number = random.randint(1, 78)

        if random_number not in invalid_ids:
            break

    url_character = base_url + str(random_number)

    repost = requests.get(url_character)
    characters = repost.json()
    
    result_character = {}
    
    result_character["afiliação"] = characters["affiliation"]
    result_character["genero"] = characters["gender"]
    result_character["imagem"] = characters["image"]
    result_character["nome"] = characters["name"]
    result_character["raça"] = characters["race"]

    origin_planet = characters["originPlanet"]
    result_character["planeta"] = origin_planet["name"] if origin_planet else None

    return jsonify(result_character)

if __name__ == '__main__':
  app.run(port=5000, host='localhost', debug=True)
