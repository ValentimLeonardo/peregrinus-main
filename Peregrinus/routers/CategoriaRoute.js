const routerEnvio = require("express").Router;
const router = routerEnvio();
const envioControle = require("../controllers/CategoriaControle");

router.get("/categoria", (req,res)=>{
    const resposta = envioControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/categoria/:id", (req,res)=>{
    const id = req.params.id;
    const resposta = envioControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/categoria",(req,res)=>{
    const novoAtendimento = req.body;

    const resposta = envioControle.criar(novoAtendimento)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/categoria/:id",(req,res)=>{
    const id = req.params.id;
    const envio = req.body;
    
    const resposta = envioControle.alterar(categoria.id_material, categoria.id_fantasia, categoria.id_armas,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/categoria/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = envioControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;