const db = require("../infraestrutura/conexao")
class ComprasControle{
    buscar(){
        const sql = "SELECT * from compras";
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
        const sql = "SELECT * from compras WHERE id=?";
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

    criar(compras){
        const sql = "INSERT INTO compras (valor_total,quant_de_itens, pagamento,data_vendida,status_carrinho,id_usuario,id_envio,id_relatorio) VALUES (?, ?, ?,?,?, ?, ?,?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[compras.valor_total,compras.quant_de_itens,compras.pagamento,compras.data_vendida,compras.status_carrinho,compras.id_usuario,compras.id_envio,compras.id_relatorio],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(valor_total,quant_de_itens, pagamento,data_vendida,status_carrinho,id_usuario,id_envio,id_relatorio, id){
        
        const sql = "UPDATE compras SET status= ?, data_envio=?, data_chegada_prevista=? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[valor_total,quant_de_itens, pagamento,data_vendida,status_carrinho,id_usuario,id_envio,id_relatorio,id],(error,resposta)=>{
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
        const sql = "Delete from compras WHERE id = ?";
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

module.exports = new ComprasControle();
