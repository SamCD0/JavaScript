let total = 0;

const precos = {
    Bala: 0.25,
    Chocolate: 5.00,
    Bolacha: 2.00
};

function atualizarValor() {
    const produto = document.getElementById("produto").value;
    const valor = precos[produto] || "";
    document.getElementById("valor").value = valor;
}

function adicionarItem() {
    const produto = document.getElementById("produto").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    if (!produto || isNaN(valor) || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha corretamente todos os campos.");
        return;
    }

    const subtotal = valor * quantidade;
    total += subtotal;

    const lista = document.getElementById("listarItens");
    const item = document.createElement("li");
    item.textContent = `${produto} - R$${valor.toFixed(2)} x ${quantidade} = R$${subtotal.toFixed(2)}`;
    lista.appendChild(item);

    document.getElementById("Total").textContent = total.toFixed(2);

    // Limpar campos após adicionar
    document.getElementById("produto").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
}

function limparTudo() {
    document.getElementById("listarItens").innerHTML = "";
    document.getElementById("Total").textContent = "0.00";
    total = 0;
}
