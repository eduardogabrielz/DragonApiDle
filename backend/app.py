from flask import Flask, jsonify, request
import requests
import random
from translations import *
from choose import choose

character = ['Goku', "vegeta", "Piccolo", "Bulma", "Freezer", "Zarbon", "Dodoria", 'Ginyu', "Celula", 'Gohan', "Krillin",
             "Tenshinhan", "Yamcha", "Chi-Chi", "Gotenks", "Trunks", "Master Roshi", "Bardock", "Launch", "Mr. Satan",
             "Dende", "Android 17", "Android 16", "Android 19", "Android 20 (Dr. Gero)", "Android 13", "Android 14",
             "Android 15", "Nail", "Raditz", "Babidi", "Majin Buu", "Bills", "Whis", "Zeno", "Kibito-Shin", "Jiren",
             "Toppo", "Dyspo", "Marcarita", "Vermoudh", "Grand Priest", "Kaio del norte (Kaito)", "Android 18",
             "Gogeta", "Vegetto", "Janemba", "Broly", "Kaio del Sur", "Kaio del este", "Kaio del Oeste", "Gran Kaio",
             "Kaio-shin del Este", "Kaio-shin del Norte", "Kaio-shin del Sur", "Kaio-shin del Oeste", "Gran Kaio-shin",
             "Kibito"]

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

    content = requests.get(url_character)
    character_data = content.json()
    
    data_json_character= translate_character(choose(character_data))

    return jsonify(data_json_character)

if __name__ == '__main__':
  app.run(port=5000, host='localhost', debug=True)
