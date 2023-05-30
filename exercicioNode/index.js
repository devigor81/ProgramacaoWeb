const express = require("express");
const app = express();

let contador = 0;
let relatorioIncremento1 = 0;
let relatorioIncremento5 = 0;

app.get("/incremento1", function (req, res) {
  contador += 1
  relatorioIncremento1 += 1;
  res.send({contador})
});

app.get("/incremento5", function (req, res) {
  contador += 5
  relatorioIncremento5 += 1;
  res.send({contador})
});

app.get("/contador", function (req, res) {
  res.send({ contador});
});

app.get("/relatorio", function (req, res) {
  const relatorio = {contador, relatorioIncremento1, relatorioIncremento5};
  res.send({relatorio});
});

app.listen(3000);
