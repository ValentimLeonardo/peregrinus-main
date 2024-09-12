
const rotaEnvio = require("./EnvioRoute")
const rotaAdm = require("./AdmRoute")
const rotaMaterial = require("./MaterialRoute")
const rotaFantasia = require('./FantasiaRoute')
const rotaUsuario = require('./UsuarioRoute')
const rotaPagamento = require('./PagamentoRoute')
const rotaArmas = require('./ArmasRoute')
const rotaCategoria = require('./CategoriaRoute')
const rotaCompras = require('./ComprasRoute')
const rotaEstoque=require('./EstoqueRoute')
const rotaInserido = require('./InseridoRoute')
const rotaPertence = require('./PertenceRoute')
const rotaProduto = require('./ProdutoRoute')


module.exports= (app) =>{
    app.use(rotaAdm)
    app.use(rotaArmas)
    app.use(rotaCategoria)
    app.use(rotaCompras)
    app.use(rotaEnvio)
    app.use(rotaEstoque)
    app.use(rotaFantasia)
    app.use(rotaInserido)
    app.use(rotaMaterial)
    app.use(rotaPagamento)
    app.use(rotaPertence)
    app.use(rotaProduto)
    app.use(rotaUsuario)
    
    



}