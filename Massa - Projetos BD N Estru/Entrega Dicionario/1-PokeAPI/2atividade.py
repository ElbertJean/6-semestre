import requests

url = "https://pokeapi.co/api/v2/ability/battle-armor"

response = requests.get(url)
data = response.json()

for efeito in data['effect_entries']:
    if efeito['language']['name'] == 'en':
        print('Nome da habilidade: short_effect')
        print('Detalhes da habilidade: ', efeito['short_effect'])

print()
print ('Pokémons que possuem essa habilidade: ')

acc_pokemon = []

for pokemon in data['pokemon']: 
    acc_pokemon.append(pokemon['pokemon']['name']) 
    
print(acc_pokemon)