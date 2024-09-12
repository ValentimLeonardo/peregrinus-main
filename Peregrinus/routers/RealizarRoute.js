const routerEnvio = require("express").Router;
const router = routerEnvio();
const realizarControle = require("../controllers/RealizarControle");

router.get("/realizar", (req,res)=>{
    const resposta = realizarControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/realizar/:id_compra/:id_produto", (req,res)=>{
    const { id_compra, id_produto } = req.params;
    const resposta = realizarControle.buscarId(id_compra,id_produto);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/realizar",(req,res)=>{
    const { id_compra, id_produto } = req.body;

    const resposta = realizarControle.criar(id_compra, id_produto)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/realizar/:id_compra/:id_produto",(req,res)=>{
     const { id_compra, id_produto } = req.params;
    const { novo_id_produto } = req.body;
    
    const resposta = realizarControle.alterar(id_compra,id_produto, novo_id_produto.id_compra,novo_id_produto.id_produto)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/realizar/:id_compra/:id_produto",(req,res)=>{
    const {id1,id2} = req.params;
    const resposta = realizarControle.apagar(id1,id2)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;