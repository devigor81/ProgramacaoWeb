const inputDescricao = document.getElementById('inputDescricao');
const inputPreco = document.getElementById('inputPreco');
const inputQuantidade = document.getElementById('inputQuantidade');

const botaoAdicionar = document.getElementById('botaoAdicionar');
const botaoRemover = document.getElementById('botaoRemover');

const tabela = document.getElementById('conteudoTabela');

let produtos = [];

const redefiniTabela = () => {

    tabela.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {

        const novaLinha = document.createElement("tr");
        const celulaDescricao = document.createElement("td");
        const celulaPreco = document.createElement("td");
        const celulaQuantidade = document.createElement("td");

        celulaDescricao.textContent = produtos[i].descricao;
        celulaPreco.textContent = produtos[i].preco;
        celulaQuantidade.textContent = produtos[i].quantidade;

        novaLinha.appendChild(celulaDescricao);
        novaLinha.appendChild(celulaPreco);
        novaLinha.appendChild(celulaQuantidade);

        tabela.appendChild(novaLinha);
    }
}

const limparTabela = () => {
    tabela.innerHTML = "";
    produtos = [];
}

const addLista = () => {

    const produto = {
        descricao: inputDescricao.value,
        preco: inputPreco.value,
        quantidade: inputQuantidade.value
    };

    if (!produto.descricao && !produto.preco && !produto.quantidade) {
        alert('É necessário preencher todos os campos!');
        return;
    }

    produtos.push(produto);

    inputDescricao.value = "";
    inputPreco.value = "";
    inputQuantidade.value = "";

    redefiniTabela();
}

botaoAdicionar.onclick = addLista;
botaoRemover.onclick = limparTabela;
