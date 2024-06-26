from flask import Flask, jsonify, request, render_template 
from flask_cors import CORS
import requests
import random
from translations import *
from detranslation import *
from choose import *

app = Flask(__name__)
CORS(app)
    
@app.route('/')
def homepage():
   return render_template('index.html')

@app.route('/guess_who.html')
def guesswho():
  return render_template('guess_who.html')

@app.route('/iniciar', methods=['GET'])
def jogar():
    
    base_url = "https://dragonball-api.com/api/characters/"   
    
    invalid_ids = [78, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 41, 36]

    while True:
        random_number = random.randint(1, 78)

        if random_number not in invalid_ids:
            break

    url_character = base_url + str(random_number)

    content = requests.get(url_character)
    character_data = content.json()
    
    data_json_character= translate_character(choose_features(character_data))

    response = jsonify(data_json_character)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/palpite/<string:userInput>", methods=["GET"])
def palpitar(userInput):

  guess_character = destranslation_character(userInput)
  url_character = f"https://dragonball-api.com/api/characters?name={guess_character}"
  content = requests.get(url_character)
  character_data = content.json()

  data_json_character = translate_character(choose_features_tips(character_data))

  return jsonify(data_json_character)

if __name__ == '__main__':
  app.run(debug=True)
