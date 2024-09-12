
class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAdm();
        this.criarTabelaMaterial();
        this.criarTabelaFantasia();
        this.criarTabelaArmas();
        this.criarTabelaCategoria();
        this.criarTabelaEstoque();
        this.criarTabelaEnvio();
        this.criarTabelaUsuario();
        this.criarTabelaPagamento();
        this.criarTabelaProduto();
        this.criarTabelaCompras();
        this.criarTabelaPertence();
        this.criarTabelaInserido();
        this.criarPagamento('Pix',conexao);
        this.criarPagamento('Cartão de Crédito',conexao);
        this.criarPagamento('Boleto',conexao);
        
       

    }

    


    criarTabelaEnvio(){
        const sql ="create table  if not exists envio(id integer auto_increment primary key not null,status_envio boolean not null,data_envio date not null,data_chegada_prevista date not null);"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table envio"+ error.message)
                return;
            }
            console.log("Criada table Envio com sucesso")
        });

    }

    criarTabelaAdm(){
        const sql ="create table if not exists adm(id integer auto_increment primary key not null,login varchar(40) not null,senha varchar(20) not null);"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Adm"+ error.message)
                return;
            }
            console.log("Criada table Adm com sucesso")
        });

    }

    criarTabelaMaterial(){
        const sql ="create table if not exists Material(id integer auto_increment primary key not null,metal varchar(40) not null,plastico varchar(40) not null,madeira varchar(40) not null);"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Material"+ error.message)
                return;
            }
            console.log("Criada table material com sucesso")
        });

    }

    criarTabelaFantasia(){
        const sql ="CREATE TABLE if not exists Fantasia (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,genero VARCHAR(10) NOT NULL CHECK (genero IN ('masculina', 'feminina')),descricao VARCHAR(255) NOT NULL);"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Fantasia"+ error.message)
                return;
            }
            console.log("Criada table Fantasia com sucesso")
        });

    }

    criarTabelaArmas(){
        const sql ="CREATE TABLE if not exists Armas (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,tipo_arma VARCHAR(10) NOT NULL CHECK (tipo_arma IN ('espada', 'faca', 'arco', 'machado', 'clava')),descricao VARCHAR(255) NOT NULL);"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Armas"+ error.message)
                return;
            }
            console.log("Criada table Armas com sucesso")
        });

    }

    criarTabelaUsuario(){
        const sql ="create table if not exists Usuario(id integer auto_increment primary key not null,login varchar(40) not null,senha varchar(20) not null,nome varchar(40) not null,cpf varchar(40) unique key not null,email varchar(40) not null,logradouro varchar(40) not null,numero integer null,bairro varchar(40) not null,cidade varchar(40) not null,complemento varchar(40) null,num_cartao varchar(40) not null,validade date not null,titular varchar(40) not null,cod_sec integer unique key not null);"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Usuario"+ error.message)
                return;
            }
            console.log("Criada table Usuario com sucesso")
        });

    }

    criarTabelaCategoria() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Categoria (
                id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                id_material INTEGER NULL,
                id_fantasia INTEGER NULL,
                id_armas INTEGER NULL,
                FOREIGN KEY (id_material) REFERENCES Material(id),
                FOREIGN KEY (id_fantasia) REFERENCES Fantasia(id),
                FOREIGN KEY (id_armas) REFERENCES Armas(id)
            );
        `;
    
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Categoria: " + error.message);
                return;
            }
            console.log("Tabela Categoria criada com sucesso");
        });
    }
    criarTabelaPagamento() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Pagamento (
                id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                descricao VARCHAR(40) NOT NULL
            );
        `;
    
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Pagamento: " + error.message);
                return;
            }
            console.log("Tabela Pagamento criada com sucesso");
        });
    }
    
    

    criarPagamento(pagamento, db) {
        return new Promise((resolve, reject) => {
            db.query("SELECT COUNT(*) AS count FROM pagamento WHERE descricao = ?", [pagamento], (error, resultados) => {
                if (error) {
                    console.error("Erro ao verificar pagamento:", error);
                    return reject(error);
                }
    
                if (resultados[0].count > 0) {
                    return resolve(true);
                }

                db.query("INSERT INTO pagamento (descricao) VALUES (?)", [pagamento], (error, resposta) => {
                    if (error) {
                        console.error("Erro ao inserir pagamento:", error);
                        return reject(error);
                    }
    
                    console.log("Pagamento inserido com sucesso.");
                    resolve(true); // Novo pagamento foi inserido
                });
            });
        });
    }

    criarTabelaEstoque(){
        const sql ="create table if not exists estoque(id integer auto_increment primary key not null,quant_produtos integer not null,id_adm integer not null,foreign key (id_adm) references Adm(id));"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Pagamento"+ error.message)
                return;
            }
            console.log("Criada table Pagamento com sucesso")
        });
    }
    
    criarTabelaProduto() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Produto (
                id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                nome VARCHAR(40) NOT NULL,
                foto MEDIUMTEXT NOT NULL,
                descricao VARCHAR(80) NOT NULL,
                valor FLOAT NOT NULL,
                cod_estoque INTEGER NOT NULL,
                id_adm INTEGER NOT NULL,
                FOREIGN KEY (cod_estoque) REFERENCES Estoque(id),
                FOREIGN KEY (id_adm) REFERENCES Adm(id)
            );
        `;
    
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Produto: " + error.message);
                return;
            }
            console.log("Tabela Produto criada com sucesso.");
        });
    }

    criarTabelaCompras() {
        const sql = "CREATE TABLE IF NOT EXISTS Compras (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,valor_total FLOAT NOT NULL,quant_itens INTEGER NOT NULL,data_venda DATE NOT NULL,forma_pagamento VARCHAR(40) NOT NULL,id_envio INTEGER NOT NULL,id_usuario INTEGER NOT NULL,id_pagamento INTEGER NOT NULL,FOREIGN KEY (id_envio) REFERENCES Envio(id),FOREIGN KEY (id_usuario) REFERENCES Usuario(id),FOREIGN KEY (id_pagamento) REFERENCES Pagamento(id));";

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Compras: " + error.message);
                return;
            }
            console.log("Tabela Compras criada com sucesso");
        });
    }

    criarTabelaPertence() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Pertence (
                id_produto INTEGER NOT NULL,
                id_categoria INTEGER NOT NULL,
                PRIMARY KEY (id_produto, id_categoria),
                FOREIGN KEY (id_produto) REFERENCES produto(id),
                FOREIGN KEY (id_categoria) REFERENCES categoria(id)
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Pertence: " + error.message);
                return;
            }
            console.log("Tabela Pertence criada com sucesso");
        });
    }

    criarTabelaInserido() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Inserido (
                id_compra INTEGER NOT NULL,
                id_produto INTEGER NOT NULL,
                PRIMARY KEY (id_compra, id_produto),
                FOREIGN KEY (id_compra) REFERENCES Compras(id),
                FOREIGN KEY (id_produto) REFERENCES Produto(id)
            );
        `;
    
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Inserido: " + error.message);
                return;
            }
            console.log("Tabela Inserido criada com sucesso");
        });
    }
    
    

    
    
    

    


}

module.exports = new Tabelas();