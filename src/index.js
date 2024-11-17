const express = require('express');
const produtosRoutes = require('./routes/produtosRoutes');

const app = express();
app. use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de gerenciamento de produtos.');
});

app.use('/produtos', produtosRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
