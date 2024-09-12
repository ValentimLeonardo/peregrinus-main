const express = require("express")
const app = express();
const bodyParser = require('body-parser');
const port = 3307;
const router = require("./routers/index")
const db = require("./infraestrutura/conexao")
const tabelas = require("./infraestrutura/tabela")
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
tabelas.init(db)





router(app)
app.listen(3307,(error =>{
    if(error){
        console.log("DEU ERRO")
        return;
    }
    console.log("Deu bom!")
}))

module.exports = router





