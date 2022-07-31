import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const DATABASE_SCHEMA = [
  {
    entidade: "Chaves Estrangeiras Ativadas",
    query: `PRAGMA FOREIGN_KEY = ON`,
  },

  {
    entidade: "Tabela Clientes Criada",
    query: `CREATE TABLE IF NOT EXISTS "CLIENTES" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "nome" varchar(64),
            "telefone" varchar(12)
            )`
  },

  {
    entidade: "Tabela Tatuadores Criada",
    query: `CREATE TABLE IF NOT EXISTS "TATUADORES" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "nome" varchar(64),
            "telefone" varchar(12)
            )`
  },

  {
    entidade: "Tabela Agendamentos Criada",
    query: `CREATE TABLE IF NOT EXISTS "AGENDAMENTOS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "data" DATE,
            "horario" varchar(12),
            "id_cliente" INT,
            "id_tatuador" INT,
            FOREIGN KEY (id_cliente)
                REFERENCES CLIENTES (id),
            FOREIGN KEY (id_tatuador)
                REFERENCES TATUADORES (id)     
            )`
  },

  {
    entidade: "Tabela Tatuagens Criada",
    query: `CREATE TABLE IF NOT EXISTS "TATUAGENS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "categoria" varchar(64),
            "link" varchar(64),
            "idTatuador" INT,
            FOREIGN KEY (idTatuador)
                REFERENCES TATUADORES (idTatuador)     
            )`
  },

  {
    entidade: "Tabela Fornecedores Criada",
    query: `CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "nome" varchar(64),
            "telefone" varchar(12),
            "endereco" varchar(64),
            "email" varchar(64)
            )`
  },

  {
    entidade: "Tabela Produtos Criada",
    query: `CREATE TABLE IF NOT EXISTS "PRODUTOS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "descricao" varchar(64),
            "quantidade" integer,
            "valor" real,
            "tipo" varchar(15),
            "id_fornecedor" INT,
            FOREIGN KEY (id_fornecedor)
                REFERENCES FORNECEDOR (id_fornecedor)     
            )`
  }];

const Population = [
  {
    entidade: "Tabela clientes populada!",
    query: `INSERT INTO CLIENTES (NOME, TELEFONE)
    VALUES 
        ('Eugênio Oliveira', '21-994785122'),
        ('Olívia Ribeiro', '21-988796335'),
        ('Mirtes Faria Lima', '21-974659987');`
  },

  {
    entidade: "Tabela tatuadores populada!",
    query: `INSERT INTO TATUADORES (NOME, TELEFONE)
    VALUES 
        ('Lucas Sampaio', '21-998875291'),
        ('Samantha Costa', '21-985662419'),
        ('Pablo Mendes', '21-975498842');`
  },

  {
    entidade: "Tabela agendamentos populada",
    query: `INSERT INTO AGENDAMENTOS (DATA, HORARIO, ID_CLIENTE, ID_TATUADOR)
    VALUES 
        ('2022-08-15', '14:00', 1, 2),
        ('2022-08-18', '15:00', 2, 3),
        ('2022-08-19', '13:00', 3, 1),
        ('2022-08-30', '09:00', 1, 2);`
  },

  {
    entidade: "Tabela tatuagens populada",
    query: `INSERT INTO TATUAGENS (CATEGORIA, ID_TATUADOR)
    VALUES 
        ('Realismo','imagem1', 1),
        ('Maori', 'imagem2', 2),
        ('OldSchool', 'imagem3', 3),
        ('Minimalista', 'imagem4', 2),
        ('P&B', 'imagem5', 1);`
  },

  {
    entidade: "Tabela fornecedores populada",
    query: `INSERT INTO FORNECEDORES (NOME, TELEFONE, ENDERECO, EMAIL)
    VALUES 
        ('AGULHAS MIL LTDA', '21-912345678', 'Rua São Bento, nº 123', 'agulhasmil@gmail.com'),
        ('ELECTRIC INK', '21-998741145', 'Av. Mario Cruz, nº 2002', 'eletricink@gmail.com'),
        ('CAPITAL PIERCING', '21-998663347', 'Rua João de Barro, nº 198', 'capitalpiercing@gmail.com');`
  },

  {
    entidade: "Tabela produtos populada",
    query: `INSERT INTO PRODUTOS (DESCRICAO, QUANTIDADE, VALOR, TIPO, ID_FORNECEDOR)
    VALUES 
        ('Agulhas de tatuagem', 178, 2.50, 'Materiais', 1),
        ('Tinta preta', 52, 30.99, 'Materiais', 2),
        ('Piercing Nariz', 28, 39.99, 'Materiais', 3),
        ('Papel Toalha', 20, 3.20, 'Materiais', 2);`
  }]


function criaTabelas(...query) {
  query.forEach((query) => {
    db.all(query.query, (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log(query.entidade);
      }
    });
  });
}


db.serialize(() => {
  criaTabelas(...DATABASE_SCHEMA),
    criaTabelas(...Population)
});
