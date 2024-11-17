let produtos = [];

function adicionarProdutosRepo(produto) {
    produtos.push(produto);
    return produto;
}

function listarProdutosRepo() {
    return produtos;
}

function atualizarProdutosRepo(id, produtoAtualizado) {
    const index = produtos.findIndex(produto => produto.id === id);

    if (index !== -1) {
        const produto = produtos[index];
        
        // Atualiza as propriedades somente se elas forem fornecidas
        produto.nome = produtoAtualizado.nome || produto.nome;
        produto.categoria = produtoAtualizado.categoria || produto.categoria;
        produto.preco = produtoAtualizado.preco !== undefined ? produtoAtualizado.preco : produto.preco;
        produto.estoque = produtoAtualizado.estoque !== undefined ? produtoAtualizado.estoque : produto.estoque;

        return { sucesso: true, mensagem: 'Produto atualizado com sucesso.' };
    } else {
        return { sucesso: false, mensagem: 'Produto não encontrado.' };
    }
}

function deletarProdutosRepo(id) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
        produtos.splice(index, 1);
        return { sucesso: true, mensagem: 'Produto removido com sucesso.' };
    } else {
        return { sucesso: false, mensagem: 'Produto não encontrado.' };
    }
}

function buscarProdutosRepo({ nome, categoria, preco, estoque }) {
    // Filtra os produtos com base nas condições fornecidas
    const produtosEncontrados = produtos.filter((produto) => {
      return (
        (nome ? produto.nome.toLowerCase().includes(nome.toLowerCase()) : true) &&
        (categoria ? produto.categoria.toLowerCase().includes(categoria.toLowerCase()) : true) &&
        (preco !== undefined ? produto.preco == preco : true) &&
        (estoque !== undefined ? produto.estoque == estoque : true)
      );
    });
  
    // Retorna os produtos encontrados
    return produtosEncontrados;
}

module.exports = {
    adicionarProdutosRepo,
    listarProdutosRepo,
    atualizarProdutosRepo,
    deletarProdutosRepo,
    buscarProdutosRepo,
}