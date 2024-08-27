
let produtos = [];
function adicionarProduto(nome, preco, quantidade) {
    if (nome && preco > 0 && quantidade > 0) {
        
        produtos.push({ nome, preco, quantidade });
        console.log("Produto adicionado!");
    } else {
        console.log("Erro: Preencha todos os campos corretamente.");
    }
}
function listarProdutos() {
    console.log("Produtos cadastrados:");
    produtos.forEach((produto) => {
        console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`);
    });
}
function calcularValorEstoque() {
    let valorTotal = 0;
    produtos.forEach((produto) => {
        valorTotal += produto.preco * produto.quantidade;
    });
    console.log("Valor total do estoque: " + valorTotal);
}
adicionarProduto("Camiseta", 30, 5);
adicionarProduto("Calça", 80, 2);
listarProdutos();
calcularValorEstoque();
