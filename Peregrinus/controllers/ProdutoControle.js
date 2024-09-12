const db = require("../infraestrutura/conexao");

class ProdutoControle {
    buscar() {
        const sql = "SELECT * FROM Produto";
        return new Promise((resolve, reject) => {
            db.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Problema no get de produto");
                    return reject(error);
                }
                console.log("Solicitação Get recebida");
                resolve(resposta);
            });
        });
    }

    buscarId(id) {
        const sql = "SELECT * FROM Produto WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Problema no get de produto por ID");
                    return reject(error);
                }
                console.log("Solicitação Get por ID recebida");
                resolve(resposta);
            });
        });
    }

    criar(produto) {
        const sql = "INSERT INTO Produto (nome, foto, descricao, valor, cod_estoque, id_adm) VALUES (?, ?, ?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            db.query(sql, [produto.nome, produto.foto, produto.descricao, produto.valor, produto.cod_estoque, produto.id_adm], (error, resposta) => {
                if (error) {
                    console.log("Problema no post de produto");
                    return reject(error);
                }
                console.log("Solicitação post recebida");
                resolve(resposta);
            });
        });
    }

    alterar(nome, foto, descricao, valor, cod_estoque, id_adm, id) {
        const sql = "UPDATE Produto SET nome = ?, foto = ?, descricao = ?, valor = ?, cod_estoque = ?, id_adm = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [nome, foto, descricao, valor, cod_estoque, id_adm, id], (error, resposta) => {
                if (error) {
                    console.log("Algum problema ocorreu ao atualizar o produto");
                    return reject(error);
                }
                console.log("Produto atualizado com sucesso");
                resolve(resposta);
            });
        });
    }

    apagar(id) {
        const sql = "DELETE FROM Produto WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Algum problema ocorreu ao apagar o produto");
                    return reject(error);
                }
                console.log("Produto apagado com sucesso");
                resolve(resposta);
            });
        });
    }
}

module.exports = new ProdutoControle();
