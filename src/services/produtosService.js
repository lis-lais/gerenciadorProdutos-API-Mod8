const {
    adicionarProdutosRepo,
    listarProdutosRepo,
    atualizarProdutosRepo,
    deletarProdutosRepo,
    buscarProdutosRepo,
} = require('../repositories/produtosRepository');

function adicionarProdutosService({ nome, categoria, preco, estoque }) {
    if (!nome || !categoria || !preco || !estoque) {
        return { sucesso: false, mensagem: 'Todos os campos são obrigatórios' };
    }

    const novoProduto = {
        id: Date.now().toString(),
        nome: nome.trim(),
        categoria: categoria.trim(),
        preco: parseFloat(preco),
        estoque: parseInt(estoque),
    };

    adicionarProdutosRepo(novoProduto);
    return { sucesso: true, produto: novoProduto };
}

function listarProdutosService() {
    const produtos = listarProdutosRepo();
    if (produtos && produtos.length > 0) {
        return produtos;
    } else {
        return [];
    }
}

function atualizarProdutosService(id, { nome, categoria, preco, estoque }) {

    const produtoAtualizado = {
        id,
        nome: nome || produto.nome,
        categoria: categoria || produto.categoria,
        preco: preco || produto.preco,
        estoque: estoque || produto.estoque,
    };

    const resultadoRepo = atualizarProdutosRepo(id, produtoAtualizado);
    if (resultadoRepo.sucesso) {
        return { sucesso: true, produto: produtoAtualizado };
    } else {
        return { sucesso: false, mensagem: resultadoRepo.mensagem };
    }
}

function deletarProdutosService(id) {
    const resultado = deletarProdutosRepo(id);

    if (resultado.sucesso) {
        return { sucesso: true, mensagem: 'Produto deletado com sucesso' };
    } else {
        return { sucesso: false, mensagem: 'Produto não encontrado' };
    }
}

function buscarProdutosService({ nome, categoria, preco, estoque }) {
    const precoConvertido = !isNaN(preco) ? parseFloat(preco) : undefined;
    const estoqueConvertido = !isNaN(estoque) ? parseInt(estoque, 10) : undefined;

    const produtos = buscarProdutosRepo({
        nome,
        categoria,
        preco: precoConvertido,
        estoque: estoqueConvertido,
    });
    if (produtos.length === 0) {
        return { sucesso: false, mensagem: 'Nenhum produto encontrado' };
    }
    return { sucesso: true, produtos };
}


module.exports = {
    adicionarProdutosService,
    listarProdutosService,
    atualizarProdutosService,
    deletarProdutosService,
    buscarProdutosService,
}