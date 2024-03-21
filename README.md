
API de Cadastro de Usuários e Livros
Esta é uma API desenvolvida em Node.js com o framework Express, que permite o cadastro de usuários e livros em um sistema.

Recursos
Cadastro de usuários
Autenticação de usuários
Cadastro de livros

Pré-requisitos
Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em nodejs.org.

Instalação
Clone este repositório:
bash
Copy code
git clone https://github.com/seu-usuario/api-cadastro-usuarios-livros.git
Na raiz do projeto, instale as dependências:
Copy code
npm install
Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:
makefile
Copy code
PORT=3000
JWT_SECRET=suachaveprivadaparageraçãodetokensjwt
Configuração do Banco de Dados
Esta API utiliza um banco de dados PostgresSQL para armazenar informações de usuários e livros. Certifique-se de ter um servidor MongoDB em execução e atualize as informações de conexão no arquivo config/database.js.

Uso
Para iniciar o servidor, execute o seguinte comando na raiz do projeto:

sql
Copy code
npm start
A API estará disponível em http://localhost:3000.

Rotas
Usuários
POST /api/users/register: Cria um novo usuário. Requer um corpo JSON com name, email e password.
POST /api/users/login: Autentica um usuário existente. Requer um corpo JSON com email e password.
Livros
POST /api/books: Cria um novo livro. Requer um corpo JSON com title, author e description.
GET /api/books: Retorna todos os livros cadastrados.
GET /api/books/:id: Retorna um livro específico pelo ID.
PUT /api/books/:id: Atualiza as informações de um livro existente pelo ID. Requer um corpo JSON com title, author e description.
DELETE /api/books/:id: Exclui um livro pelo ID.
Contribuição
Sinta-se à vontade para contribuir com melhorias para esta API. Basta abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a Licença MIT.
