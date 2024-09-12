const express = require("express");
const routerProduto = express.Router();
const produtoControle = require("../controllers/ProdutoControle");


routerProduto.get("/produto", (req, res) => {
    const resposta = produtoControle.buscar()
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
});


routerProduto.get("/produto/:id", (req, res) => {
    const id = req.params.id;
    const resposta = produtoControle.buscarId(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
});

routerProduto.post("/produto", (req, res) => {
    const novoProduto = req.body;
     const resposta =produtoControle.criar(novoProduto)
     resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
     (error.message))
});

routerProduto.put("/produto/:id", (req, res) => {
    const id = req.params.id;
    const produto = req.body;
   const resposta= produtoControle.alterar(produto.nome, produto.foto, produto.descricao, produto.valor, produto.cod_estoque, produto.id_adm, id)
   resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
   (error.message))
});

// Apagar um produto
routerProduto.delete("/produto/:id", (req, res) => {
    const id = req.params.id;
    const resposta = ProdutoControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = routerProduto;
