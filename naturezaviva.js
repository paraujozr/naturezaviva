const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { type } = require('express/lib/response');


mongoose.connect('mongodb://127.0.0.:27017/narurezaviva', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const Usuario = mongoose.model('Usuario', {
  nome: String,
  email: String,
  senha: String,
});


const ProdutoNatureza = mongoose.model('ProdutoNatureza', {
  id_produtonatureza: String,
  Descrição: String,
  Marca: String,
  DataValidade: Date,
  QuantidadeEstoque: Number,
});


app.get('/', (req, res) => {
  res.send('Bem-vindo à sua aplicação.');
});


app.post('/cadastrousuario', (req, res) => {
  const { nome, email, senha } = req.body;
  
  const novoUsuario = new Usuario({
    nome,
    email,
    senha,
  });
  
  novoUsuario.save((err) => {
    if (err) {
      res.status(500).send('Erro ao cadastrar usuário.');
    } else {
      res.send('Usuário cadastrado com sucesso.');
    }
  });
});


app.post('/cadastroprodutonatureza', (req, res) => {
  const {
    id_produtonatureza,
    Descrição,
    Marca,
    DataValidade,
    QuantidadeEstoque,
  } = req.body;

  const novoProduto = new ProdutoNatureza({
    id_produtonatureza,
    Descrição,
    Marca,
    DataValidade: new Date(DataValidade),
    QuantidadeEstoque,
  });

  novoProduto.save((err) => {
    if (err) {
      res.status(500).send('Erro ao cadastrar ProdutoNatureza.');
    } else {
      res.send('ProdutoNatureza cadastrado com sucesso.');
    }
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Node.js está rodando na porta ${port}`);
});