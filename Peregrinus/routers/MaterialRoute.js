const routerEnvio = require("express").Router;
const router = routerEnvio();
const envioControle = require("../controllers/MaterialControle");

router.get("/material", (req,res)=>{
    const resposta = envioControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/material/:id", (req,res)=>{
    const id = req.params.id;
    const resposta = envioControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/material",(req,res)=>{
    const novoAtendimento = req.body;

    const resposta = envioControle.criar(novoAtendimento)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/material/:id",(req,res)=>{
    const id = req.params.id;
    const material = req.body;
    
    const resposta = envioControle.alterar(material.metal,material.plastico,material.madeira,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/material/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = envioControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;