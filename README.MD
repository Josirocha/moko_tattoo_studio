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

    ### Tatuadores
 * __GET /tatuadores__
 <p>Lista todos os registros de pessoas tatuadoras cadastradas</p>
<p>Esquema da resposta:</p>

<pre>
    <code>
        {
            "id": 1,
            "nome": "Lucas Sampaio",
            "telefone": "21-998875291"
        },
        {
            "id": 2,
            "nome": "Samantha Costa",
            "telefone": "21-985662419"
        },
        {
            "id": 3,
            "nome": "Pablo Mendes",
            "telefone": "21-975498842"
        }
    </code>
</pre>
	
* __GET /tatuadores/:id__
<p>Lista o registro da pessoa tatuadora cadastrada com determinado id. O número do id deve ser passado como parâmetro na rota.</p>
<p>Esquema da resposta:</p>

<pre>
    <code>
        {
            "id": 6,
            "nome": "Avoante",
            "telefone": "21-123456789"
        }
    </code>
</pre>

* __POST /tatuadores__
<p>Insere um registro de pessoa tatuadora. No <em>body</em> da requisição deve ser passado apenas <em>nome</em> e <em>telefone</em> como atributos, pois o id é gerado por autoincremento.</p>
<p>Esquema da requisição:</p>

<pre>
    <code>
        {
            "nome": "Raquel Avoante",
            "telefone": "21-123456789"
        }
    </code>
</pre>

<p>Esquema da resposta:</p>

<pre>
    <code>
        {
            "msg": "Pessoa tatuadora Raquel Avoante inserida com sucesso"
        }
    </code>
</pre>

* __PUT /tatuadores/:id__
<p>Atualiza um registro específico de pessoa tatuadora com determinado id. O número do id deve ser passado como parâmetro na rota, e a requisição deve ter um <em>body</em>.</p>
<p>Esquema da requisição:</p>

<pre>
    <code>
        {
            "nome": "Avoante",
            "telefone": "85-123456789"
        }
    </code>
</pre>

Esquema da resposta:

<pre>
    <code>
        {
            "msg": "Pessoa tatuadora Avoante, com id 6, atualizada com sucesso",
            "Pessoa tatuadora": {
                "nome": "Avoante",
                "telefone": "85-123456789"
            }
        }
    </code>
</pre>

* __DELETE /tatuadores/:id__
<p>Apaga um registro específico, conforme o id passado como parâmetro na rota.</p>
<p>Esquema da resposta:</p>

<pre>
    <code>
        {
            "msg": "Pessoa tatuadora com 9 deletada com sucesso!"
        }
    </code>
</pre>