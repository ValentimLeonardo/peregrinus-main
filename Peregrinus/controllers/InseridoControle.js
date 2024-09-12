const db = require("../infraestrutura/conexao");

class InseridoControle {
    buscar() {
        const sql = "SELECT * FROM Inserido";
        return new Promise((resolve, reject) => {
            db.query(sql, {}, (error, resposta) => {
                if (error) {
                    console.log("Problema no get de Inserido");
                    reject(error);
                }
                console.log("Solicitação Get recebida");
                resolve(resposta);
            });
        });
    }

    buscarPorIds(id_compra, id_produto) {
        const sql = "SELECT * FROM Inserido WHERE id_compra = ? AND id_produto = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id_compra, id_produto], (error, resposta) => {
                if (error) {
                    console.log("Problema no get de Inserido por IDs");
                    reject(error);
                }
                console.log("Solicitação Get por IDs recebida");
                resolve(resposta);
            });
        });
    }

    criar(inserido) {
        const sql = "INSERT INTO Inserido (id_compra, id_produto) VALUES (?, ?)";
        return new Promise((resolve, reject) => {
            db.query(sql, [inserido.id_compra, inserido.id_produto], (error, resposta) => {
                if (error) {
                    console.log("Problema no post de Inserido");
                    reject(error);
                }
                console.log("Solicitação post recebida");
                resolve(resposta);
            });
        });
    }

    apagar(id_compra, id_produto) {
        const sql = "DELETE FROM Inserido WHERE id_compra = ? AND id_produto = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id_compra, id_produto], (error, resposta) => {
                if (error) {
                    console.log("Algum problema ocorreu");
                    reject(error);
                }
                console.log("Registro apagado com sucesso");
                resolve(resposta);
            });
        });
    }
}

module.exports = new InseridoControle();
