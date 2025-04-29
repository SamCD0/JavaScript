const listaProdutos = [
    {id: 1, nome: "God of War", preco: 60, Imagem: "img/Cleiton.jpg"},
    {id: 2, nome: "Marvel's Spider Man", preco: 200, Imagem: "img/Miranha.jpg"},
    {id: 3, nome: "Doom", preco: 120, Imagem: "img/Doom.jpg"},
    {id: 4, nome: "Final Fantasy 7", preco: 180, Imagem: "img/Eu.jpg"},
]

const containerProdutos = document.getElementById("produtos")
const barraPesquisa = document.getElementById("barraPesquisa")
const listaCarrinho = document.getElementById("listaCarrinho")
const botaoCarrinho = document.getElementById("botaoCarrinho")
const botaoLoja = document.getElementById("botaoLoja")
const divCarrinho = document.getElementById("carrinho")
const totalCarrinho = document.getElementById("totalCarrinho")


//Carrinho de compras
let carrinho = []
//Função que mostra os produtos
function mostrarProdutos(lista) {
    containerProdutos.innerHTML = ""
    lista.forEach(produto => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <img src="${produto.Imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco},00</p>
            <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `
        containerProdutos.appendChild(card)
    });
}
//Adicionar ao carrinho
function adicionarCarrinho(idProduto) {
    const produtoSelecionado = listaProdutos.find(prod => prod.id === idProduto)
    const itemExistente = carrinho.find(item => item.id === idProduto)
    if (itemExistente) {
        itemExistente.quantidade += 1
    } else {
        carrinho.push({...produtoSelecionado, quantidade: 1})
    }
    atualizarCarrinho()
}

//Diminuir a quantidade no carrinho
function diminuirQuantidade(idProduto) {
    const itemExistente = carrinho.find(item => item.id === idProduto)
    if (itemExistente) {
        itemExistente.quantidade -= 1
        if (itemExistente.quantidade <= 0) {
            removerDoCarrinho(idProduto)
            return
        }
        atualizarCarrinho()
    }
}

//Remover do carrinho
function removerDoCarrinho(idProduto) {
    carrinho = carrinho.filter(item => item.id !== idProduto)
    atualizarCarrinho()
}

//Atualizar Carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = ""
    carrinho.forEach(item => {
        const li = document.createElement("li")
        li.innerHTML = `
            <span>${item.nome}</span>
            <span>${item.quantidade}</span>
            <span>R$ ${item.preco * item.quantidade},00</span>
            <span>
                <button class="aumentar" onclick="adicionarCarrinho(${item.id})">+</button>
                <button class="diminuir" onclick="diminuirQuantidade(${item.id})">-</button>
                <button class="remover" onclick="removerDoCarrinho(${item.id})">Remover</button>
            </span>
        `
        listaCarrinho.appendChild(li)
    })
    calcularTotal()
}
//Calcular Total a pagar
function calcularTotal() {
    let total = 0
    carrinho.forEach(item => {
        total += item.preco * item.quantidade
    })
    totalCarrinho.innerHTML = `<strong>Total: R$ ${total},00</strong>`
}


barraPesquisa.addEventListener("input", () => {
    const textoPesquisa = barraPesquisa.value.toLowerCase()
    const produtosFiltrados = listaProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(textoPesquisa)
    )
    mostrarProdutos(produtosFiltrados)
})


botaoCarrinho.addEventListener("click", () => {
    containerProdutos.style.display = "none"
    barraPesquisa.style.display = "none"
    divCarrinho.style.display = "block"
    botaoCarrinho.style.display = "none"
    botaoLoja.style.display = "block" 
})


botaoLoja.addEventListener("click", () => {
    containerProdutos.style.display = "block"
    barraPesquisa.style.display = "block"
    divCarrinho.style.display = "none"
    botaoCarrinho.style.display = "block"
    botaoLoja.style.display = "none"
})


mostrarProdutos(listaProdutos)
