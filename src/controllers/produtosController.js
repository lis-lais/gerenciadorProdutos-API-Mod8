const {
    adicionarProdutosService,
    listarProdutosService,
    atualizarProdutosService,
    deletarProdutosService,
    buscarProdutosService,
} = require('../services/produtosService');

function adicionarProdutos(req, res) {
    const { nome, categoria, preco, estoque } = req.body;
    const resultado = adicionarProdutosService({ nome, categoria, preco, estoque });

    if (resultado.sucesso) {
        res.status(201).json(resultado.produto);
    } else {
        res.status(400).json({ message: resultado.mensagem });
    }
}

function listarProdutos(req, res) {
    const produtos = listarProdutosService();

    if (produtos && produtos.length > 0) {
        res.status(200).json(produtos);
    } else {
        res.status(404).json({ message: "Nenhum produto encontrado."});
    }
}

function atualizarProdutos(req, res) {
    const id = req.params.id;
    const { nome, categoria, preco, estoque } = req.body;
    const resultado = atualizarProdutosService(id, { nome, categoria, preco, estoque });

    if (resultado.sucesso) {
        res.status(200).json(resultado.produto);
    } else {
        res.status(404).json({ message: resultado.mensagem });
    }
}

function deletarProdutos(req, res) {
    const id = req.params.id;
    const resultado = deletarProdutosService(id);

    if (resultado.sucesso) {
        res.status(200).send({message: 'Produto deletado com sucesso.'});
    } else {
        res.status(404).json({ message: resultado.mensagem });
    }
}

function buscarProdutos(req, res) {
    const { nome, categoria, preco, estoque } = req.query;
    console.log("Parâmetros recebidos:", { nome, categoria, preco, estoque });
    const resultado = buscarProdutosService({ nome, categoria, preco, estoque });
    if (resultado.sucesso) {
      res.status(200).json(resultado.produtos);
    } else {
      res.status(404).json({ message: resultado.mensagem });
    }
}

module.exports = {
    adicionarProdutos,
    listarProdutos,
    atualizarProdutos,
    deletarProdutos,
    buscarProdutos,
}
