const routerEnvio = require("express").Router;
const router = routerEnvio();
const comprasControle = require("../controllers/0ComprasControle");

router.get("/compras", (req,res)=>{
    const resposta = comprasControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/compras/:id", (req,res)=>{
    const id = req.params.id;
    const resposta = comprasControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/compras",(req,res)=>{
    const novoCompras = req.body;

    const resposta = comprasControle.criar(novoCompras)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/compras/:id",(req,res)=>{
    const id = req.params.id;
    const compras = req.body;
    
    const resposta = comprasControle.alterar(compras.valor_total,compras.quant_de_itens,compras.pagamento,compras.data_vendida,compras.status_carrinho,compras.id_usuario,compras.id_envio,compras.id_relatorio,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/compras/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = comprasControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;