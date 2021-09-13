Dependências:

npm install --save express // Depêndencia principal para trabalhar com node. Express é uma framework web estruturada escrita em JavaSCript para trabalhar com node.js em tempo de execução.

npm install --save nodemon // Nodemon é onde executa o servidor, atualiza constantemente, facilitando o processo.

npm install --save mysql // Trabalhar com o banco de dados escolhido.

npm install --save body-parser // Receber os dados de maneira mais prática dos formulários. Faz o parseamento dos campos do formulário.

npm install --save express-handlebars // Serve para trabalhar com templates.

O node é necessário criar rotas(routes) para retornar as views.

Toda função(function) necessita de uma requisição(req) e de uma resposta(res).

Layouts é onde deixa o layout principal, é bom para economizar linha de códigos e deixar o conteúdo estático, como header e footer.

Na rota get, depois de colocar o endereço, há a possibilidade de requerer um parâmetro id, para fazer isso é necessário por " :id ", fazendo exigir um id para poder funcionar. Para deixar o id opcional, basta fazer " :id? ".

Para passar os dados, como o id, é possível fazer no render a seguinte função:
{id: req.params.id}, assim, fazendo a requisição no back-end, é possível exibir no front-end colocando em uma das telas da seguinte maneira: {{id}}.