import pandas as pd
import os

def listar_maiores_fornecedores(nome_deputado, arquivo_csv):
    df = pd.read_csv(arquivo_csv, sep=';', encoding='utf-8-sig', low_memory=False)

    filtro = df['txNomeParlamentar'].str.contains(nome_deputado)
    df_deputado = df[filtro].copy()
    
    if df_deputado['vlrLiquido'].dtype == 'O': 
        df_deputado['vlrLiquido'] = df_deputado['vlrLiquido'].str.replace(',', '.').astype(float)
        
    fornecedores = {}
    
    # função do pandas para iterar cada dado
    for _, row in df_deputado.iterrows():
        fornecedor = row['txtFornecedor']
        valor = row['vlrLiquido']
        
        # isna verifica se o conteudo está vazio
        if pd.isna(fornecedor):
            fornecedor = 'Não informado'
            
        if fornecedor in fornecedores:
            fornecedores[fornecedor] += valor
        else:
            fornecedores[fornecedor] = valor
            
    ordenados = sorted(fornecedores.items(), key=lambda item: item[1], reverse=True)
    return ordenados

if __name__ == "__main__":
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    arquivo = os.path.join(diretorio_atual, 'Ano-2026.csv')
    
    deputado = "Tabata Amaral"
    
    print(f"Maiores fornecedores de {deputado} em 2026: (Top 20)\n")
    try:
        resultado = listar_maiores_fornecedores(deputado, arquivo)
        
        for i, (fornecedor, valor) in enumerate(resultado[:20], start=1):
            valor_formatado = f"R$ {valor:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
            print(f"{i}º: {fornecedor} -> {valor_formatado}")
            
    except FileNotFoundError:
        print(f"Erro: O arquivo '{arquivo}' não foi encontrado.")
