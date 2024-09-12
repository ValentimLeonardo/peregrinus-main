const db = require("../infraestrutura/conexao")
class RealizarControle{
    buscar(){
        const sql = "SELECT * from realizar";
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

    buscarId(id1,id2){
        const sql = "SELECT * from realizar WHERE id_compra = ? AND id_produto = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[id1,id2],(error,resposta)=>{
                if(error){
                    console.log("Problema no get do envio");
                    reject(error)
                }
                console.log("Solicitação Get por id recebida")
                resolve(resposta)
            })
        })
    }

    criar(realizarID,realizarID2){
        const sql = "INSERT INTO realizar (id_compra, id_produto) VALUES (?, ?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[realizarID,realizarID2],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(id_compra, id_produto,novo_idcompra, novo_idproduto){
        
        const sql = "UPDATE realizar SET id_compra = ?, id_produto= ? WHERE id_compra = ? AND id_produto = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[id_produto, id_compra,novo_idcompra, novo_idproduto],(error,resposta)=>{
                if(error){
                    console.log("Algum problema ocorreu");
                    reject(error)
                }
                console.log("100% zero bala mermo")
                resolve(resposta)
            })
        })
    }

    apagar(id1,id2){
        const sql = "DELETE FROM realizar WHERE id_compra = ? AND id_produto = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[id1,id2],(error,resposta)=>{
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

module.exports = new RealizarControle();