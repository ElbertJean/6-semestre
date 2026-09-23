# 🌱 CadastraAi

O **CadastraAi** é um sistema de cadastros totalmente flexível e livre de regras estruturais restritas. Construído com o conceito de **"Schema-less"** (sem esquema fixo), ele permite que o usuário crie documentos dinâmicos definindo qualquer conjunto de chaves e valores que desejar.

É o projeto perfeito para armazenar dados não estruturados de maneira elegante!

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React (Vite) + TailwindCSS
- **Backend:** Python + Django Rest Framework
- **Banco de Dados:** MongoDB (rodando no Docker)

---

## 🚀 Como rodar o projeto localmente

Você precisará iniciar duas partes do sistema separadamente: o Banco de Dados/API (Backend) e a Interface (Frontend).

### Passo 1: Iniciando o Backend e o MongoDB

O banco de dados do projeto roda isolado em um contêiner Docker para facilitar.

1. Abra o seu terminal e entre na pasta da API:
   ```bash
   cd api
   ```
2. Suba o banco de dados MongoDB com o Docker:
   ```bash
   docker-compose up -d
   ```
3. Execute as migrações iniciais do Django:
   ```bash
   python manage.py migrate
   ```
4. Com o banco online, inicie o servidor Python (Django) especificamente na porta 8001:
   ```bash
   python manage.py runserver 8001
   ```
   *Pronto! O servidor já está escutando na porta 8001 e conectado ao Mongo.*

---

### Passo 2: Iniciando o Frontend (React)

Agora, abra uma **nova janela do terminal** (mantenha a do backend rodando!) e fique na pasta raiz do projeto (`CadastraAi`).

1. Instale todas as dependências do React (necessário apenas na primeira vez):
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. O terminal mostrará um link (geralmente `http://localhost:5173`). Basta clicar ou copiar esse link e colar no seu navegador!

---

### 🎉 Divirta-se!
Você já pode começar a usar o CadastraAi. Todo item que você adicionar, alterar ou remover pela interface refletirá em tempo real no seu banco de dados MongoDB!
