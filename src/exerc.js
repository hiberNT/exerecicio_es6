const alunos = [
    {nome : 'Hibernon', nota: '7'},
    {nome : 'Maria', nota: '9'},
    {nome : 'Luis', nota: '4'},
    {nome : 'Jonas', nota: '6'},
    {nome : 'Luisa', nota: '2'}
]

const alunosAprovados = alunos.filter((item) => {
    return item.nota >= 6
})

console.log(alunosAprovados)