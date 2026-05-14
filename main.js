function Jogo(nome, genero, anoDeLançamento) {
    this.nome = nome;
    this.genero = genero;
    this.anoDeLançamento = anoDeLançamento;
}

function Estrategia(nome, personagens) {
    Jogo.call(this, nome, 'Moba', 2009);
}

function Tiro(nome){
    Jogo.call(this, nome, "Fps", 2020);
}

const jogo1 = new Jogo("Minecraft", "Sobrevivência", 2009);
const jogo2 = new Estrategia("League of Legends", 140);
const jogo3 = new Tiro("Valorant");

console.log(Object.values(jogo1));
console.log(Object.values(jogo2));
console.log(Object.values(jogo3));