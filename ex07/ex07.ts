import { Pessoa } from "./ex08";

class Aluno implements Pessoa {
    nome: string;
    idade: number;
    rua: string;

    matricula:number;
    cadeiras:string[];

    constructor(nome:string, idade:number, rua:string, matricula:number, cadeiras:string[]) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.matricula = matricula;
        this.cadeiras = cadeiras;
    }

    cadastrar() {
        console.log(aluno1)
    };
};
const aluno1 = new Aluno("Bruna", 25, "Fictícia", 52380, ['Javascript', 'Python', 'Angular', 'Typscript']);
aluno1.cadastrar();

class Funcionario implements Pessoa {
    nome: string;
    idade: number;
    rua: string;

    identificador:number;
    setor:string;

    constructor(nome:string, idade:number, rua:string, identificador:number, setor:string) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.identificador = identificador;
        this.setor = setor;
    }
    cadastrar(){
        console.log(funcionario1)
    };
};

const funcionario1 = new Funcionario('Joao', 34, 'Ficticia', 5234, 'RH');

funcionario1.cadastrar()