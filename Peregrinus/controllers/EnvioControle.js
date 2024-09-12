const db = require("../infraestrutura/conexao")
class EnvioControle{
    buscar(){
        const sql = "SELECT * from envio";
        return new Promise((resolve,reject)=>{
            db.query(sql,{},(error,resposta)=>{
                if(error){
                    console.log("Problema no get do envio");
                    reject(error)
                }
                console.log("Solicitação Get recebida")
                resolve(resposta)
            })
        })
    }

    buscarId(id){
        const sql = "SELECT * from envio WHERE id=?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[id],(error,resposta)=>{
                if(error){
                    console.log("Problema no get do envio");
                    reject(error)
                }
                console.log("Solicitação Get por id recebida")
                resolve(resposta)
            })
        })
    }

    criar(envio){
        const sql = "INSERT INTO envio (status_envio,data_envio, data_chegada_prevista) VALUES (?, ?, ?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[envio.status_envio, envio.data_envio,envio.data_chegada_prevista],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(status_envio,data_envio,data_chegada_prevista, id){
        
        const sql = "UPDATE envio SET status_envio= ?, data_envio=?, data_chegada_prevista=? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[status_envio, data_envio, data_chegada_prevista,id],(error,resposta)=>{
                if(error){
                    console.log("Algum problema ocorreu");
                    reject(error)
                }
                console.log("100% zero bala mermo")
                resolve(resposta)
            })
        })
    }

    apagar(id){
        const sql = "Delete from envio WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[id],(error,resposta)=>{
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

module.exports = new EnvioControle();