const db = require("../infraestrutura/conexao")
class ArmasControle{
    buscar(){
        const sql = "SELECT * from armas";
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

    criar(armas){
        if (!['espada', 'faca', 'arco', 'machado', 'clava'].includes(armas.tipo_arma)) {
            return Promise.reject(new Error('Tipo de arma inválido. Deve ser "espada", "faca", "arco", "machado" ou "clava".'));
        }
        const sql = "INSERT INTO armas (tipo_arma,descricao) VALUES (?, ?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[armas.tipo_arma ,armas.descricao],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(tipo_arma,descricao, id){
        if (!['espada', 'faca', 'arco', 'machado', 'clava'].includes(tipo_arma)) {
            return Promise.reject(new Error('Tipo de arma inválido. Deve ser "espada", "faca", "arco", "machado" ou "clava".'));
        }
        
        const sql = "UPDATE armas SET tipo_arma= ?, descricao=? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[tipo_arma,descricao,id],(error,resposta)=>{
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
        const sql = "Delete from armas WHERE id = ?";
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

module.exports = new ArmasControle();