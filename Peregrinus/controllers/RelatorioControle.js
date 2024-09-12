const db = require("../infraestrutura/conexao")
class RelatorioControle{
    buscar(){
        const sql = "SELECT * from relatorio";
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
        const sql = "SELECT * from relatorio WHERE id=?";
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

    criar(relatorio){
        const sql = "INSERT INTO relatorio (produtos_comprados,produtos_restantes,id_estoque) VALUES (?, ?, ?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[relatorio.produtos_comprados,relatorio.produtos_restantes,relatorio.id_estoque],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(produtos_comprados,produtos_restantes,id_estoque, id){
        
        const sql = "UPDATE relatorio SET produtos_comprados= ?, produtos_restantes=?, id_estoque=? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[produtos_comprados,produtos_restantes,id_estoque,id],(error,resposta)=>{
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
        const sql = "Delete from relatorio WHERE id = ?";
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

module.exports = new RelatorioControle();