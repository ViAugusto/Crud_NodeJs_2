// Receber as dependências instaladas no npm.
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const handlebars = require("express-handlebars");
const app = express(); // Vai chamar o método express.
const urlencodeParser = bodyParser.urlencoded({extended:false}); // Padrão do body parser para conseguir enviar os dados.
const sql = mysql.createConnection({ // Fazendo a conexão com o banco de dados.
    host: "localhost",
    user: "root",
    password: "",
    port: 3306
});

// Usar as clausulas do MySql.
sql.query("use node_2")

// Inicializar o servidor. 
app.listen(3000, function(req,res){
    console.log("Servidor está rodando");
});
// localhost:3000

// Colocando templates através de handlebars e falando qual será o principal
app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Usando o express para pegar recursos estáticos, como imagens, javascript e css.
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.use("/img", express.static("img"));

// Routes and templates.
// Rota para a index.
app.get("/", function(req,res){
    res.render("index");
})

// Rota para inserir dados.
app.get("/inserir", function(req,res){
    res.render("inserir");
})

// Rota para ver os dados inseridos.
app.get("/select/:id?", function(req,res){
    if(!req.params.id){ // Se não existir ID na URL, ele vai mostrar todos os dados.
        sql.query("select * from user order by id asc", function(err, results, fields){
        res.render("select", {dados:results});
    });
    }else{
        sql.query("select * from user where id=? order by id asc", [req.params.id], function(err, results, fields){ // Pega o id que está lá e fará o select único.
        res.render("select", {dados:results});
        });
    }
});

// Rota para a confirmação da inserção de dados.
app.post("/controllerForm", urlencodeParser, function(req,res){
    sql.query("insert into user values (?, ?, ?, ?)," [req.body.id, req.body.name, req.body.age, req.body.course]); // Usa a query para passar os valores até o banco de dados.
    res.render("controllerForm");
})

// Rota para deletar os dados.
app.get("/deletar/id:", function(req,res){
    sql.query("delete from user where id=?", [req.params.id]);
    res.render("deletar");
});

// Rota para atualizar os dados.
app.get("/update/:id", function(req, res){
    sql.query("select * from user where id=?", [req.params.id], function(err, results, fields){
        res.render("update", {dados: req.params.id, name: results[0].name, age: results[0].age, course: results[0].course});
    })
});

// Rota para a confirmação da atualização dos dados.
app.post("/controllerUpdate", urlencodeParser, function(req, res){
    sql.query("update user set name=?, age=?, course=?, where id=?", [req.body.name, req.body.age, req.body.course, req.body.id]);
    res.render("controllerUpdate");
});