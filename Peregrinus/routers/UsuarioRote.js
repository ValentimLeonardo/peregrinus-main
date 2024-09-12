const routerEnvio = require("express").Router;
const router = routerEnvio();
const usuarioControle = require("../controllers/UsuarioControle");

router.get("/usuario", (req,res)=>{
    const resposta = usuarioControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/usuario/:id", (req,res)=>{
    const id = req.params.id;
    const resposta = usuarioControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/usuario",(req,res)=>{
    const novoUsuario = req.body;

    const resposta = usuarioControle.criar(novoUsuario)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/usuario/:id",(req,res)=>{
    const id = req.params.id;
    const usuario = req.body;
    
    const resposta = usuarioControle.alterar(usuario.login,usuario.senha,usuario.email,usuario.numero_cartao,usuario.cod_cartao,usuario.cartao,usuario.validade,usuario.nome_titular,usuario.cep,usuario.cidade,usuario.numero_casa,usuario.bairro,usuario.complemento,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/usuario/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = usuarioControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;