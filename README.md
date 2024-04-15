
# Aplicação de Lista de Tarefas
Este projeto é uma aplicação simples de lista de tarefas que permite aos usuários adicionar, editar, deletar e visualizar tarefas. O frontend é construído com React e o backend é um servidor Express que utiliza Prisma para interação com o banco de dados PostgreSQL.



## Tecnologias Utilizadas
```markdown
- Frontend**: React, Axios, TailwindCSS, React-Modal
- Backend**: Node.js, Express, Prisma, PostgreSQL
- Outras ferramentas: React Router para roteamento no frontend
```

## Configuração do Projeto

### Pré-requisitos

- Node.js
- npm ou yarn
- PostgreSQL

### Instalação

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instalar Dependências no Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configurar o Banco de Dados**
   - Certifique-se de que PostgreSQL está instalado e rodando
   - Configure o arquivo `.env` no diretório `backend` com as seguintes variáveis:
     ```
     DATABASE_URL="postgresql://SEU_USUARIO:SUASENHA@localhost:5432/NOME_DO_BANCO_DE_DADOS"
     ```

4. **Rodar as Migrações do Prisma**
   ```bash
   npx prisma migrate dev
   ```

5. Iniciar o Servidor Backend**
   ```bash
   npm run dev
   ```

6. **Instalar Dependências no Frontend**
   ```bash
   cd frontend
   npm install
   ```

7. **Iniciar o Aplicativo Frontend**
   ```bash
   npm run dev
   ```

## Uso

Após iniciar o servidor backend e o aplicativo frontend, navegue para `http://localhost:3000` no seu navegador para acessar a aplicação de lista de tarefas.
