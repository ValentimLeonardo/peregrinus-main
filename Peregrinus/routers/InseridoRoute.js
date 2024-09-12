const express = require("express");
const routerInserido = express.Router();
const inseridoControle = require("../controllers/InseridoControle");

// Rota para buscar todos os registros na tabela Inserido
routerInserido.get("/inserido", (req, res) => {
    const resposta = inseridoControle.buscar();
    resposta
        .then(inserido => res.status(200).json(inserido))
        .catch(error => res.status(400).json({ mensagem: error.message }));
});

// Rota para buscar um registro específico por id_compra e id_produto
routerInserido.get("/inserido/:id_compra/:id_produto", (req, res) => {
    const { id_compra, id_produto } = req.params;
    const resposta = inseridoControle.buscarPorIds(id_compra, id_produto);
    resposta
        .then(inserido => res.status(200).json(inserido))
        .catch(error => res.status(400).json({ mensagem: error.message }));
});

// Rota para criar um novo registro na tabela Inserido
routerInserido.post("/inserido", (req, res) => {
    const novoInserido = req.body;
    const resposta = inseridoControle.criar(novoInserido);
    resposta
        .then(inserido => res.status(201).json(inserido))
        .catch(error => res.status(400).json({ mensagem: error.message }));
});

// Rota para apagar um registro específico por id_compra e id_produto
routerInserido.delete("/inserido/:id_compra/:id_produto", (req, res) => {
    const { id_compra, id_produto } = req.params;
    const resposta = inseridoControle.apagar(id_compra, id_produto);
    resposta
        .then(() => res.status(204).send()) // No content response after delete
        .catch(error => res.status(400).json({ mensagem: error.message }));
});

module.exports = routerInserido;
