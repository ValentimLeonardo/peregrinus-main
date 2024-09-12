const db = require("../infraestrutura/conexao")
class FantasiaControle{
    buscar(){
        const sql = "SELECT * from fantasia";
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
        const sql = "SELECT * from fantasia WHERE id=?";
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

    criar(fantasia){
        const sql = "INSERT into fantasia (genero,descricao) VALUES (?, ?)";

        if (!['masculina', 'feminina'].includes(fantasia.genero)) {
            return Promise.reject(new Error('Gênero inválido. Deve ser "masculina" ou "feminina".'));
        }

        return new Promise((resolve,reject)=>{
            db.query(sql,[fantasia.genero,fantasia.descricao],(error,resposta)=>{
                if(error){
                    console.log("problema no post de fantasia");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(genero, descricao, id){
        if (!['masculina', 'feminina'].includes(genero)) {
            return Promise.reject(new Error('Gênero inválido. Deve ser "masculina" ou "feminina".'));
        }
        const sql = "UPDATE fantasia SET genero=?, descricao=? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[genero,descricao,id],(error,resposta)=>{
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
        const sql = "Delete from fantasia WHERE id = ?";
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

module.exports = new FantasiaControle();
