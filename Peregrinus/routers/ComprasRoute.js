const express = require("express");
const routerCompras = express.Router();
const comprasControle = require("../controllers/ComprasControle");

// Buscar todas as compras
routerCompras.get("/compras", (req, res) => {
    const resposta = comprasControle.buscar();
    resposta.then(compras => res.status(200).json(compras))
        .catch(error => res.status(400).json({ message: error.message }));
});

// Buscar uma compra por ID
routerCompras.get("/compras/:id", (req, res) => {
    const id = req.params.id;
    const resposta = comprasControle.buscarId(id);
    resposta.then(compra => res.status(200).json(compra))
        .catch(error => res.status(400).json({ message: error.message }));
});

// Criar uma nova compra
routerCompras.post("/compras", (req, res) => {
    const novaCompra = req.body;
    const resposta = comprasControle.criar(novaCompra);
    resposta.then(compra => res.status(201).json(compra))  // 201 Created
        .catch(error => res.status(400).json({ message: error.message }));
});

// Atualizar uma compra existente
routerCompras.put("/compras/:id", (req, res) => {
    const id = req.params.id;
    const compra = req.body;
    const resposta = comprasControle.alterar(
        compra.valor_total,
        compra.quant_itens,
        compra.data_venda,
        compra.forma_pagamento,
        compra.id_envio,
        compra.id_usuario,
        compra.id_pagamento,
        id
    );
    resposta.then(compra => res.status(200).json(compra))
        .catch(error => res.status(404).json({ message: error.message }));
});

// Apagar uma compra
routerCompras.delete("/compras/:id", (req, res) => {
    const id = req.params.id;
    const resposta = comprasControle.apagar(id);
    resposta.then(() => res.status(204).send())  // 204 No Content
        .catch(error => res.status(404).json({ message: error.message }));
});

module.exports = routerCompras;
