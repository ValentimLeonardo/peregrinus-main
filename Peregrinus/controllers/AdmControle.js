const db = require("../infraestrutura/conexao")
class AdmControle{
    buscar(){
        const sql = "SELECT * from adm";
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
        const sql = "SELECT * from adm WHERE id=?";
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

    criar(adm){
        const sql = "INSERT into adm (login,senha) VALUES (?, ?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[adm.login,adm.senha],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(login,senha, id){
        
        const sql = "UPDATE adm SET login= ?, senha=?  WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[login,senha,id],(error,resposta)=>{
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
        const sql = "Delete from adm WHERE id = ?";
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

module.exports = new AdmControle();
