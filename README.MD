# Moko Tattoo Studio
Projeto de final de módulo do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 4.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). SQLite foi utilizado como banco de dados do projeto. 

##  :heavy_check_mark: Pré-Requisitos

* [Node.js](https://nodejs.org/en/) - v. 16.15.1
* [NPM](https://www.npmjs.com/package/npm/v/8.11.0) - v. 8.11.0

## :outbox_tray: Packages

* [Express](https://expressjs.com/) - v. 4.18.1
* [Nodemon](https://www.npmjs.com/package/nodemon) - v. 2.0.19
* [SQLite](https://www.npmjs.com/package/sqlite3) - v. 5.0.10

## :rocket: Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone https://github.com/Josirocha/moko_tattoo_studio.git
```

Entrando na pasta:
```
cd moko_tattoo_studio
```
Instalando os pacotes:
```
npm install
```
Criando e populando o banco de dados:
```
npm run database 
```
Rodando o projeto:
```
npm start
```

## :pencil: Rotas HTTP implementadas

### Produtos
 * __GET /produtos__

    Retorna todos os dados do banco. Esquema da resposta:
    ```json
    {
        "produtos": [
            {
                "ID": 1,
                "DESCRICAO": "Tinta preta",
                "QUANTIDADE": 20,
                "VALOR": 29.90,
                "TIPO" : "Materiais",
                "ID_FORNECEDOR" : 1
            },
            {
                "ID": 2,
                "DESCRICAO": "Piercing nariz",
                "QUANTIDADE": 28,
                "VALOR": 39.99,
                "TIPO" : "Materiais",
                "ID_FORNECEDOR" : 3
            }
        ],
    }
    ```
 * __GET /produtos/id/{id}__

    Retorna o produto correspondente ao id. Esquema da resposta: 
    ```json
    {
        "produtos": [
            {
                "ID": 4,
                "DESCRICAO": "Papel toalha",
                "QUANTIDADE": 20,
                "VALOR": 3.2,
                "TIPO" : "Materiais",
                "ID_FORNECEDOR" : 2
            },
        ],
    }
    ```
 * __POST /produtos__

    Insere um produto na base de dados. Esquema da requisição:
    ```json
    {
        "descricao" : "Tinta roxa",
        "quantidade" : 45,
        "valor" : 80,
        "tipo" : "Materiais",
        "id_fornecedor" : 2
    }
    ```

    Esquema da resposta
    ```json
    {
        "mensagem": "Produto inserido com sucesso",
        "erro": false
    }
    ```
* __PUT /produtos/id/{id}__

    Atualiza um produto de acordo com o id. Esquema da requisição:
    ```json
    {
        "descrição" : "Tinta vermelha",
        "quantidade" : 45,
        "valor" : 80,
        "tipo" : "Materiais",
        "id_forncedor" : 2
    }
    ```
    Esquema da resposta:
    ```json
    {
        "msg": "tinta vermelha, com id 13 atualizado com sucesso",
	"produto": {
		"descricao": "tinta vermelha",
		"quantidade": 45,
		"valor": 80,
		"tipo": "Materiais",
		"id_fornecedor": 2
	},
	"erro": false
    }
    ```
* __DELETE  /produtos/id/{id}__

    Deleta um produto de acordo com o id. Esquema da resposta:
    ```json
    {
        "msg": "Produto 2 deletado com sucesso!",
	    "erro": "false"
    }
    ```