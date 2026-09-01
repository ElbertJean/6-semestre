import requests

url = 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome'

response = requests.get(url)
data = response.json()

for deputados in data['dados']:
    if deputados['siglaPartido'] == 'PT' and deputados['siglaUf'] == 'SP':
        print(deputados)