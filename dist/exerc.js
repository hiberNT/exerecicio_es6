"use strict";

var alunos = [{
  nome: 'Hibernon',
  nota: '7'
}, {
  nome: 'Maria',
  nota: '9'
}, {
  nome: 'Luis',
  nota: '4'
}, {
  nome: 'Jonas',
  nota: '6'
}, {
  nome: 'Luisa',
  nota: '2'
}];
var alunosAprovados = alunos.filter(function (item) {
  return item.nota >= 6;
});
console.log(alunosAprovados);