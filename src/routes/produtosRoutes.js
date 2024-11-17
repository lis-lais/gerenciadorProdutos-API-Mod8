const express = require('express');
const router = express.Router();
const {
    adicionarProdutos,
    listarProdutos,
    atualizarProdutos,
    deletarProdutos,
    buscarProdutos,
} = require('../controllers/produtosController');

router.post('/', adicionarProdutos);
router.get('/', listarProdutos);
router.put('/:id', atualizarProdutos);
router.delete('/:id', deletarProdutos);
router.get('/buscar', buscarProdutos);

module.exports = router;
