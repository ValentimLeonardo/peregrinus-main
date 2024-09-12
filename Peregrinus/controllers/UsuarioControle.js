const db = require("../infraestrutura/conexao")
class UsuarioControle{
    buscar(){
        const sql = "SELECT * from usuario";
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
        const sql = "SELECT * from usuario WHERE id=?";
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

    criar(usuario){
        const sql = "INSERT INTO Usuario (login, senha, nome, cpf, email, logradouro, numero, bairro, cidade, complemento,num_cartao, validade, titular, cod_sec) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        return new Promise((resolve,reject)=>{
            db.query(sql,[ usuario.login,usuario.senha,usuario.nome,usuario.cpf,usuario.email,usuario.logradouro,usuario.numero,usuario.bairro,usuario.cidade,usuario.complemento,usuario.num_cartao,usuario.validade,usuario.titular,usuario.cod_sec],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(login, senha, nome, cpf, email, logradouro, numero, bairro, cidade, complemento, num_cartao, validade, titular, cod_sec, id){
        
        const sql = " UPDATE Usuario SET login = ?,senha = ?,nome = ?,cpf = ?,email = ?,logradouro = ?,numero = ?,bairro = ?,cidade = ?,complemento = ?,num_cartao = ?,validade = ?,titular = ?,cod_sec= ? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[login, senha, nome, cpf, email, logradouro, numero, bairro, cidade, complemento, num_cartao, validade, titular, cod_sec, id],(error,resposta)=>{
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
        const sql = "Delete from usuario WHERE id = ?";
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

module.exports = new UsuarioControle();
