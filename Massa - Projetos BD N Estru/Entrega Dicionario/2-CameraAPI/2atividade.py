import pandas as pd
import os

def calcular_cota_parlamentar(nome_deputado, arquivo_csv):
    df = pd.read_csv(arquivo_csv, sep=';', encoding='utf-8-sig', low_memory=False)
    df['txNomeParlamentar'] = df['txNomeParlamentar'].fillna('')

    filtro = df['txNomeParlamentar'].str.contains(nome_deputado)
    df_deputado = df[filtro]
    
    if df_deputado['vlrLiquido'].dtype == 'O': 
        valores = df_deputado['vlrLiquido'].str.replace(',', '.').astype(float)
    else:
        valores = df_deputado['vlrLiquido']
        
    return valores.sum()

if __name__ == "__main__":
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    arquivo = os.path.join(diretorio_atual, 'Ano-2026.csv')
    
    deputado = "Tabata Amaral"
    
    print(f"Calculando cota parlamentar para o deputado {deputado} usando Pandas...")
    try:
        total = calcular_cota_parlamentar(deputado, arquivo)
        valor_formatado = f"R$ {total:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
        print(f"O total da cota parlamentar gasta por {deputado} em 2026 foi: {valor_formatado}")
    except FileNotFoundError:
        print(f"Erro: O arquivo '{arquivo}' não foi encontrado.")
