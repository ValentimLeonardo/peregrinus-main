const express = require("express");
const routerPertence = express.Router();
const pertenceControle = require("../controllers/PertenceControle");

// Buscar todos os registros
routerPertence.get("/pertence", (req, res) => {
    const resposta = pertenceControle.buscar();
    resposta.then(pertence => res.status(200).json(pertence))
        .catch(error => res.status(400).json({ message: error.message }));
});

// Buscar um registro específico por id_produto e id_categoria
routerPertence.get("/pertence/:id_produto/:id_categoria", (req, res) => {
    const { id_produto, id_categoria } = req.params;
    const resposta = pertenceControle.buscarPorId(id_produto, id_categoria);
    resposta.then(pertence => res.status(200).json(pertence))
        .catch(error => res.status(400).json({ message: error.message }));
});

// Criar um novo registro
routerPertence.post("/pertence", (req, res) => {
    const novoPertence = req.body;
    const resposta = pertenceControle.criar(novoPertence);
    resposta.then(pertence => res.status(201).json(pertence))  // 201 Created
        .catch(error => res.status(400).json({ message: error.message }));
});

// Atualizar um registro existente
routerPertence.put("/pertence/:id_produto/:id_categoria", (req, res) => {
    const { id_produto, id_categoria } = req.params;
    const pertence = req.body;
    const resposta = pertenceControle.alterar(id_produto, id_categoria, pertence);
    resposta.then(() => res.status(200).json({ message: "Registro atualizado com sucesso" }))
        .catch(error => res.status(404).json({ message: error.message }));
});

// Apagar um registro
routerPertence.delete("/pertence/:id_produto/:id_categoria", (req, res) => {
    const { id_produto, id_categoria } = req.params;
    const resposta = pertenceControle.apagar(id_produto, id_categoria);
    resposta.then(() => res.status(204).send())  // 204 No Content
        .catch(error => res.status(404).json({ message: error.message }));
});

module.exports = routerPertence;
