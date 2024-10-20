const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // Supondo que seus arquivos estão na pasta 'public'

// Endpoint para processar o envio do formulário
app.post('/lead', (req, res) => {
    const { nome, email, telefone } = req.body;
    console.log('Dados recebidos:', { nome, email, telefone });
    
    // Aqui você pode adicionar lógica para salvar os dados no Firestore se desejar.
    
    res.status(200).send('Dados recebidos com sucesso'); // Resposta para o cliente
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
