class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

const heroi1 = new Heroi("Gandalf", 150, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
const heroi3 = new Heroi("Bruce Lee", 32, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

console.log(heroi1.atacar());
console.log(heroi2.atacar());
console.log(heroi3.atacar());
console.log(heroi4.atacar());
