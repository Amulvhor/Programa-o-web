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

let appointments = [];

// Rota para cadastrar um agendamento
app.post('/appointments', (req, res) => {
  const { patientName, date } = req.body;
  const appointment = { patientName, date };
  appointments.push(appointment);
  res.status(201).send(`Agendamento para ${patientName} marcado para ${date}.`);
});

// Rota para listar todos os agendamentos
app.get('/appointments', (req, res) => {
  res.status(200).json(appointments);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

//Explicação:

//As dependências express e body-parser são importadas.

//O body-parser é utilizado para que possamos acessar os dados enviados pelo cliente via POST no req.body.

//Uma variável bookings é criada para armazenar as reservas feitas.

//É criada uma rota POST para a url /bookings.

//No req.body são extraídas as informações da reserva (nome do cliente e data).

//É criado um objeto booking com essas informações.

//A reserva é adicionada ao array bookings.

//É enviado uma resposta com status 201 indicando que a reserva foi efetuada com sucesso