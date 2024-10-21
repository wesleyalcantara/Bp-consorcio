const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Endpoint para processar o envio do formulário
app.post('/lead', (req, res) => {
    const { nome, email, telefone } = req.body;
    console.log('Dados recebidos:', { nome, email, telefone });
    
    res.status(200).send('Dados recebidos com sucesso');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
