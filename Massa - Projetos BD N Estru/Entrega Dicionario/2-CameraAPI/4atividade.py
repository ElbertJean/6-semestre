import requests
import string
import nltk
from collections import Counter

# Função para garantir que os pacotes do NLTK estejam baixados
def preparar_nltk():
    try:
        nltk.data.find('corpora/stopwords')
    except LookupError:
        nltk.download('stopwords', quiet=True)
        
    try:
        nltk.data.find('tokenizers/punkt')
    except LookupError:
        nltk.download('punkt', quiet=True)
        
    try:
        nltk.data.find('tokenizers/punkt_tab')
    except LookupError:
        nltk.download('punkt_tab', quiet=True)

def analisar_discursos():
    # Garantir downloads do NLTK antes de processar
    preparar_nltk()
    
    # ID da Deputada Tabata Amaral
    id_deputado = 204534
    
    # URL da API de discursos da Câmara
    url = f"https://dadosabertos.camara.leg.br/api/v2/deputados/{id_deputado}/discursos"
    
    # Parâmetros: de 01/01/2023, ordenado por dataHoraInicio DESC (mais recentes primeiro)
    params = {
        "dataInicio": "2023-01-01",
        "ordenarPor": "dataHoraInicio",
        "ordem": "DESC",
        "itens": 100 # Pegando os 100 discursos mais recentes do período
    }
    
    print("Buscando discursos da Deputada Tabata Amaral na API da Câmara...")
    response = requests.get(url, params=params)
    
    if response.status_code != 200:
        print(f"Erro ao acessar a API: Código {response.status_code}")
        return
        
    dados = response.json().get('dados', [])
    
    if not dados:
        print("Nenhum discurso encontrado neste período.")
        return
        
    print(f"Foram analisados {len(dados)} discursos.")
    
    # Juntar todas as transcrições em um único bloco de texto
    texto_completo = ""
    for discurso in dados:
        if discurso.get('transcricao'):
            texto_completo += " " + discurso['transcricao']
            
    if not texto_completo.strip():
        print("As transcrições estão vazias.")
        return
        
    # 1. Transformar tudo em minúsculo
    texto_completo = texto_completo.lower()
    
    # 2. Tokenizar (separar o texto em palavras)
    palavras = nltk.word_tokenize(texto_completo, language='portuguese')
    
    # 3. Preparar a lista de Stop Words (preposições, conjunções, etc) e pontuação
    stop_words = set(nltk.corpus.stopwords.words('portuguese'))
    pontuacoes = set(string.punctuation)
    
    # Adicionando alguns termos que são comuns nas transcrições da câmara que não têm valor analítico
    termos_comuns_camara = {'sr', 'sra', 'presidente', 'deputado', 'deputada', 'v.exa', 'exa', 'sr.', 'sra.'}
    
    palavras_limpas = []
    
    # 4. Filtrar as palavras
    for palavra in palavras:
        # A palavra deve ser apenas texto (.isalpha()), não ser uma stopword nem pontuação/termo da câmara
        if (palavra.isalpha() and 
            palavra not in stop_words and 
            palavra not in pontuacoes and
            palavra not in termos_comuns_camara):
            
            palavras_limpas.append(palavra)
            
    # 5. Contar a frequência (usando um dicionário da própria biblioteca padrão)
    frequencia = Counter(palavras_limpas)
    
    # 6. Ordenar em ordem decrescente (o most_common do Counter já faz isso pra gente)
    mais_comuns = frequencia.most_common(20)
    
    print("\n--- As 20 palavras mais frequentes nos discursos da Tabata Amaral (Desde 2023) ---")
    for posicao, (palavra, contagem) in enumerate(mais_comuns, 1):
        print(f"{posicao}º: '{palavra}' -> apareceu {contagem} vezes")

if __name__ == "__main__":
    analisar_discursos()
