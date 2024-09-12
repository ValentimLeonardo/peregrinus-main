const db = require("../infraestrutura/conexao")
class atendimentoModel{
    listar(){
        const sql = "SELECT * from atendimentos";
        return new Promise((resolve,reject)=>{
            db.query(sql,{},(error,resposta)=>{
                if(error){
                    console.log("Algum problema ocorreu");
                    reject(error)
                }
                console.log("100% zero bala mermo")
                resolve(resposta)
            })
        })
        
    }

     criar(atendimento){
        const sql = "INSERT INTO atendimentos (nome, idade, casado) VALUES (?, ?, ?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[atendimento.nome, atendimento.idade,atendimento.casado],(error,resposta)=>{
                if(error){
                    console.log("Algum problema ocorreu");
                    reject(error)
                }
                console.log("100% zero bala mermo")
                resolve(resposta)
            })
        })
    }
}

module.exports = new atendimentoModel();