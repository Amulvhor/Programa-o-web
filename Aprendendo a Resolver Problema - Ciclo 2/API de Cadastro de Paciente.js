//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: João Lucas Maciel Martins
//DATA: 21/05/2023

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let patients = [];

// Rota para cadastrar um paciente
app.post('/patients', (req, res) => {
  const { name, age, gender } = req.body;
  const patient = { name, age, gender };
  patients.push(patient);
  res.status(201).send(`Paciente ${name} cadastrado com sucesso.`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

//explicação 

//As dependências express e body-parser são importadas.

//O body-parser é usado para acessar os dados enviados pelo cliente através do POST em req.body.

//Uma variável patients é criada para armazenar os pacientes cadastrados.

//É definida uma rota POST para a URL /patients.

//As informações do paciente (nome, idade e gênero) são extraídas de req.body.

//Um objeto patient é criado com essas informações.

//O paciente é adicionado à lista de patients.

//Uma resposta é enviada com o status 201 para indicar que o paciente foi adicionado com sucesso.