const routerEnvio = require("express").Router;
const router = routerEnvio();
const relatorioControle = require("../controllers/RelatorioControle");




router.get("/relatorio", (req,res)=>{
    const resposta = relatorioControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/relatorio/:id", (req,res)=>{
    const id = req.params.id;
    const resposta = relatorioControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/relatorio",(req,res)=>{
    const novoRelatorio = req.body;

    const resposta = relatorioControle.criar(novoRelatorio)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/relatorio/:id",(req,res)=>{
    const id = req.params.id;
    const relatorio = req.body;
    
    const resposta = relatorioControle.alterar(relatorio.produtos_comprados,relatorio.produtos_restantes,relatorio.id_estoque,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/relatorio/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = relatorioControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;