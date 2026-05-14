function Jogo(nome, genero, anoDeLançamento, qtdJogadores) {
    this.nome = nome;
    this.genero = genero;
    this.anoDeLançamento = anoDeLançamento;

    let _qtdJogadores = qtdJogadores;

    this.getJogadores = function() {
        return _qtdJogadores;
    }

    this.setJogadores = function (valor) {
        if (typeof valor === 'number') {
            _qtdJogadores = valor;
        }
    }

}

function Estrategia(nome, qtdJogadores) {
    Jogo.call(this, nome, 'Moba', 2009, qtdJogadores);

    this.aumentoJogadores = function(){
        const novosJogadores = this.getJogadores() * 3;

        this.setJogadores(novosJogadores);
    }
}

function Tiro(nome, qtdJogadores){
    Jogo.call(this, nome, "Fps", 2020, qtdJogadores);

    this.aumentoJogadores = function(){
        const novosJogadores = this.getJogadores() * 10;

        this.setJogadores(novosJogadores);
    }
}

const jogo1 = new Jogo("Minecraft", "Sobrevivência", 2009, 1);
const jogo2 = new Estrategia("League of Legends", 100);
const jogo3 = new Tiro("Valorant", 5);
const jogo4 = new Tiro("Counter Strike", 9);

console.log(Object.values(jogo1));
console.log(Object.values(jogo2));
console.log(Object.values(jogo3));
console.log(Object.values(jogo4));

console.log(jogo1.getJogadores());
console.log(jogo2.getJogadores());
console.log(jogo3.getJogadores());
console.log(jogo4.getJogadores());

jogo2.aumentoJogadores();
jogo3.aumentoJogadores();

console.log(jogo1.getJogadores());
console.log(jogo2.getJogadores());
console.log(jogo3.getJogadores());
console.log(jogo4.getJogadores());
