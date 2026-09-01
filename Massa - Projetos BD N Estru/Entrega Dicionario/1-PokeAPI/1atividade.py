import requests

url = 'https://pokeapi.co/api/v2/pokemon/ditto'

response = requests.get(url)
data = response.json()

for habilidade in data["abilities"]:
    print(habilidade["ability"]['name'], " -> ", habilidade['ability']['url'])
