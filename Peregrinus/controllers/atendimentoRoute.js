const db = require("../infraestrutura/conexao")
class atendimentoControle{
    buscar(){
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

    buscarId(id){
        const sql = "SELECT * from atendimentos where id=?";
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
    alterar(nome,idade,casado, id){
        
        const sql = "UPDATE atendimentos SET nome= ?, idade=?, casado=? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[nome, idade, casado,id],(error,resposta)=>{
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
        const sql = "Delete from atendimentos WHERE id = ?";
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

module.exports = new atendimentoControle();