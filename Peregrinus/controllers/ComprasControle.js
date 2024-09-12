const db = require("../infraestrutura/conexao");

class ComprasControle {
    // Buscar todas as compras
    buscar() {
        const sql = "SELECT * FROM Compras";
        return new Promise((resolve, reject) => {
            db.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Problema ao buscar todas as compras");
                    return reject(error);
                }
                console.log("Solicitação GET para todas as compras recebida");
                resolve(resposta);
            });
        });
    }

    // Buscar uma compra por ID
    buscarId(id) {
        const sql = "SELECT * FROM Compras WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Problema ao buscar a compra por ID");
                    return reject(error);
                }
                console.log("Solicitação GET para compra por ID recebida");
                resolve(resposta);
            });
        });
    }

    // Criar uma nova compra
    criar(compra) {
        const sql = `
            INSERT INTO Compras (valor_total, quant_itens, data_venda, forma_pagamento, id_envio, id_usuario, id_pagamento)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        return new Promise((resolve, reject) => {
            db.query(sql, [compra.valor_total, compra.quant_itens, compra.data_venda, compra.forma_pagamento, compra.id_envio, compra.id_usuario, compra.id_pagamento], (error, resposta) => {
                if (error) {
                    console.log("Problema ao criar nova compra");
                    return reject(error);
                }
                console.log("Solicitação POST para nova compra recebida");
                resolve(resposta);
            });
        });
    }

    // Atualizar uma compra existente
    alterar(valor_total, quant_itens, data_venda, forma_pagamento, id_envio, id_usuario, id_pagamento, id) {
        const sql = `
            UPDATE Compras
            SET valor_total = ?, quant_itens = ?, data_venda = ?, forma_pagamento = ?, id_envio = ?, id_usuario = ?, id_pagamento = ?
            WHERE id = ?
        `;
        return new Promise((resolve, reject) => {
            db.query(sql, [valor_total, quant_itens, data_venda, forma_pagamento, id_envio, id_usuario, id_pagamento, id], (error, resposta) => {
                if (error) {
                    console.log("Problema ao atualizar a compra");
                    return reject(error);
                }
                console.log("Compra atualizada com sucesso");
                resolve(resposta);
            });
        });
    }

    // Apagar uma compra
    apagar(id) {
        const sql = "DELETE FROM Compras WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Problema ao apagar a compra");
                    return reject(error);
                }
                console.log("Compra apagada com sucesso");
                resolve(resposta);
            });
        });
    }
}

module.exports = new ComprasControle();
