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


app = Flask(__name__)

@app.route('/jogar', methods=['GET'])
def jogar():
    
    base_url = "https://dragonball-api.com/api/characters/"   
    
    ids_invalidos = [62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 41, 36]

    while True:
        numero_aleatorio = random.randint(1, 78)

        if numero_aleatorio not in ids_invalidos:
            break

    url_personagem = base_url + str(numero_aleatorio)

    repost = requests.get(url_personagem)
    personagem = repost.json()

    return jsonify(personagem)

if __name__ == '__main__':
  app.run(port=5000, host='localhost', debug=True)
