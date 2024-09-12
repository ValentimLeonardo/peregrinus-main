const routerAtendimento = require("express").Router;
//const {Router} = require("express");
const router = routerAtendimento();

const atendimentoControle = require("../controllers/atendimentoRoute")

router.get("/atendimentos", (req,res)=>{
    const resposta = atendimentoControle.buscar()
    resposta.then(atendimentos => res.status(200).json(atendimentos)).catch(error => res.status(400).json(error.message))

})



router.post("/atendimentos",(req,res)=>{
    const novoAtendimento = req.body;

    const resposta = atendimentoControle.criar(novoAtendimento)
    resposta.then(atendimentos => res.status(200).json(atendimentos)).catch(error => res.status(400).json
    (error.message))

})

router.put("/atendimentos/:id",(req,res)=>{
    const id = req.params.id;
    const atendimento = req.body;
    
    const resposta = atendimentoControle.alterar(atendimento.nome,atendimento.idade,atendimento.casado,id)
    resposta.then(atendimentos => res.status(200).json(atendimentos)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/atendimentos/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = atendimentoControle.apagar(id)
    resposta.then(atendimentos => res.status(200).json(atendimentos)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;




