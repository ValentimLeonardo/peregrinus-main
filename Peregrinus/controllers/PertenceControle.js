const db = require("../infraestrutura/conexao");

class PertenceControle {
    // Buscar todos os registros na tabela Pertence
    buscar() {
        const sql = "SELECT * FROM Pertence";
        return new Promise((resolve, reject) => {
            db.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Problema ao buscar registros de Pertence");
                    reject(error);
                }
                console.log("Solicitação Get recebida");
                resolve(resposta);
            });
        });
    }

  
    buscarPorId(id_produto, id_categoria) {
        const sql = "SELECT * FROM Pertence WHERE id_produto = ? AND id_categoria = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id_produto, id_categoria], (error, resposta) => {
                if (error) {
                    console.log("Problema ao buscar registro de Pertence por ID");
                    reject(error);
                }
                console.log("Solicitação Get por ID recebida");
                resolve(resposta);
            });
        });
    }


    criar(pertence) {
         // Leo, talvez vc tenha problemas aqui, pq estamos lidando com uma chave primária composta
        const sql = "INSERT INTO Pertence (id_produto, id_categoria) VALUES (?, ?)";
        return new Promise((resolve, reject) => {
            db.query(sql, [pertence.id_produto, pertence.id_categoria], (error, resposta) => {
                if (error) {
                    console.log("Problema ao criar registro de Pertence");
                    reject(error);
                }
                console.log("Solicitação POST recebida");
                resolve(resposta);
            });
        });
    }


    alterar(id_produto, id_categoria) {

        // Leo, talvez vc tenha problemas aqui, pq estamos lidando com uma chave primária composta
        const sql = "UPDATE Pertence SET id_produto = ?, id_categoria = ? WHERE id_produto = ? AND id_categoria = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id_produto, id_categoria, id_produto, id_categoria], (error, resposta) => {
                if (error) {
                    console.log("Algum problema ocorreu ao atualizar o registro de Pertence");
                    reject(error);
                }
                console.log("Registro atualizado com sucesso");
                resolve(resposta);
            });
        });
    }


    apagar(id_produto, id_categoria) {
        const sql = "DELETE FROM Pertence WHERE id_produto = ? AND id_categoria = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id_produto, id_categoria], (error, resposta) => {
                if (error) {
                    console.log("Algum problema ocorreu ao apagar o registro de Pertence");
                    reject(error);
                }
                console.log("Registro apagado com sucesso");
                resolve(resposta);
            });
        });
    }
}

module.exports = new PertenceControle();
