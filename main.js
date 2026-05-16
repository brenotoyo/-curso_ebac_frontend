const alunos = [
    {nome: 'Breno', nota: 9},
    {nome: 'Gustavo', nota: 9.4},
    {nome: 'ana', nota: 3},
    {nome: 'José', nota: 5},
    {nome: 'Guilherme', nota: 7},
    {nome: 'Gaby', nota: 1},
    {nome: 'Andreia', nota: 6},
    {nome: 'Antônio', nota: 4}
]

const alunosAprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 6;
})

console.log(alunosAprovados);