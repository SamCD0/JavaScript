//----------------------------------------1
class Livros {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo 
      this.autor = autor
      this.paginas = paginas
    }  
    MostrarDetalhes() {
      console.log(`O nome do livro é ${this.titulo}, escrito por ${this.autor}, com ${this.paginas} paginas`)
    }
  }
const livro =  new Livros("Harry Potter e a Pedra Filosofal", "J. K. Rowling", "263")
//livro.MostrarDetalhes();
//----------------------------------------2
class ContaBancaria {
    constructor(titular, saldo) {
      this.titular = titular 
      this.saldo = saldo
    }  

    sacar(valor){

        if (valor > this.saldo) {
        console.log("não possivel resgatar")
         } else
        console.log(`${valor} R$ Resgatado;
            Saldo Atual: ${this.saldo - valor} R$`)

    }
    verSaldo(){
        console.log(`Seu saldo atual é de ${this.saldo}`)
    }
    depostitar(valor){
        console.log(`gostaria de depositar ${valor}`)
        console.log(`${valor} R$ depositado`)
        console.log(`Saldo Atual: ${this.saldo + valor} R$`)
    }
}
const conta = new ContaBancaria("PessoaA", 500)
const conta1 = new ContaBancaria("PessoaB", 165)
//conta.sacar(50);
//------------------------------------------------------3
class Pet {
    constructor(nome, especie, idade) {
        this.nome = nome 
      this.especie = especie
      this.idade = idade
    }
    falar(fala){
        console.log(`O nome dele é ${this.nome}, é um ${this.especie}, com ${this.idade} anos, e faz${fala}`)
}
}
const pet1 = new Pet("cleyson", "gato", 3)
const pet2 = new Pet("aaaa", "cachorro", "2")
//pet1.falar(" Miau")
//pet2.falar(" Au Au")
//--------------------------------4
class Filme {
    constructor(titulo, genero, duracao) {
      this.titulo = titulo 
      this.genero = genero
      this.duracao = duracao
    }  
    assistir() {
      console.log(`Você esta assistido ${this.titulo}, filme de${this.genero}, que dura ${this.duracao} minutos`)
    }
  }
const Filme1 =  new Filme("Homem-Aranha 2", "ação", 127)
//Filme1.assistir();
//--------------------------------5
class musica {
constructor(titulo, artista, genero) {
    this.titulo = titulo 
    this.genero = genero
    this.artista = artista
  }  
  tocar() {
    console.log(`tocando ${this.titulo} de ${this.artista}`)
  }
}
const musica1 =  new musica("musica bem legal", "lady gaga", "plo")
musica1.tocar();