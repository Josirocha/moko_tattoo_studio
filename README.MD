# 🐉 API - Moko Tattoo Studio

Projeto de final de módulo do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 4.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). SQLite foi utilizado como banco de dados do projeto.

## :heavy_check_mark: Pré-Requisitos

- [Node.js](https://nodejs.org/en/) - v. 16.15.1
- [NPM](https://www.npmjs.com/package/npm/v/8.11.0) - v. 8.11.0

## :outbox_tray: Packages

- [Express](https://expressjs.com/) - v. 4.18.1
- [Nodemon](https://www.npmjs.com/package/nodemon) - v. 2.0.19
- [SQLite](https://www.npmjs.com/package/sqlite3) - v. 5.0.10
- [Cors](https://www.npmjs.com/package/cors) - v. 2.8.5
- [Jest](https://www.npmjs.com/package/jest) - v. 28.1.3
- [SuperTest](https://www.npmjs.com/package/supertest) - v. 6.2.4

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

### 📦Produtos

- **GET /produtos**

  Retorna todos os dados do banco. Esquema da resposta:

  ```json
  {
    "produtos": [
      {
        "id": 1,
			  "descricao": "Agulhas de tatuagem",
			  "quantidade": 178,
			  "valor": 2.5,
			  "tipo": "Materiais",
			  "id_fornecedor": 1
      },
      {
        "id": 2,
			  "descricao": "Tinta preta",
			  "quantidade": 52,
			  "valor": 30.99,
			  "tipo": "Materiais",
			  "id_fornecedor": 2
      }
    ]
  }
  ```

- **GET /produtos/id/{id}**

  Retorna o produto correspondente ao id. Esquema da resposta:

  ```json
  {
    "produto": {
      "id": 16,
		  "descricao": "Tinta branca",
		  "quantidade": 45,
		  "valor": 80,
		  "tipo": "Materiais",
		  "id_fornecedor": 2
    }
  }
  ```

- **POST /produtos**

  Insere um produto na base de dados. Esquema da requisição:

  ```json
  {
    "descricao": "Tinta roxa",
    "quantidade": 45,
    "valor": 80,
    "tipo": "Materiais",
    "id_fornecedor": 2
  }
  ```

  Esquema da resposta

  ```json
  {
    "mensagem": "Produto inserido com sucesso",
    "erro": false
  }
  ```

- **PUT /produtos/id/{id}**

  Atualiza um produto de acordo com o id. Esquema da requisição:

  ```json
  {
    "descrição": "Tinta vermelha",
    "quantidade": 45,
    "valor": 80,
    "tipo": "Materiais",
    "id_forncedor": 2
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

- **DELETE /produtos/id/{id}**

  Deleta um produto de acordo com o id. Esquema da resposta:

  ```json
  {
    "msg": "Produto 2 deletado com sucesso!",
    "erro": "false"
  }
  ```
### 🎨Tatuadores

  - **GET /tatuadores**
     <p>Lista todos os registros de pessoas tatuadoras cadastradas</p>
    <p>Esquema da resposta:</p>

    ```json
       
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
     ```

- **GET /tatuadores/:id**

  <p>Lista o registro da pessoa tatuadora cadastrada com determinado id. O número do id deve ser passado como parâmetro na rota.</p>

  <p>Esquema da resposta:</p>

  ```json
          {
              "id": 6,
              "nome": "Avoante",
              "telefone": "21-123456789"
          }
  ```

- **POST /tatuadores**
  <p>Insere um registro de pessoa tatuadora. 
  
  No <em>body</em> da requisição deve ser passado apenas <em>nome</em> e <em>telefone</em> como atributos, pois o id é gerado por autoincremento.</p>

  <p>Esquema da requisição:</p>

  ```json
          {
              "nome": "Raquel Avoante",
              "telefone": "21-123456789"
          }
  ```

  <p>Esquema da resposta:</p>

  ```json
          {
              "msg": "Pessoa tatuadora Raquel Avoante inserida com sucesso"
          }
  ```

- **PUT /tatuadores/:id**
  <p>Atualiza um registro específico de pessoa tatuadora com determinado id. O número do id deve ser passado como parâmetro na rota, e a requisição deve ter um <em>body</em>.</p>
  <p>Esquema da requisição:</p>

  ```json
          {
              "nome": "Avoante",
              "telefone": "85-123456789"
          }
  ```

  Esquema da resposta:

  ```json
          {
              "msg": "Pessoa tatuadora Avoante, com id 6, atualizada com sucesso",
              "Pessoa tatuadora": {
                  "nome": "Avoante",
                  "telefone": "85-123456789"
              }
          }
  ```

- **DELETE /tatuadores/:id**
  <p>Apaga um registro específico, conforme o id passado como parâmetro na rota.</p>
  <p>Esquema da resposta:</p>

  ```json
          {
              "msg": "Pessoa tatuadora com 9 deletada com sucesso!"
          }
  ```

### 💻 Fornecedores

- **GET /fornecedores**

  Retorna todos os dados do banco. Esquema da resposta:

  ```json
  {
    "fornecedores": [
      {
        "id": 1,
        "nome": "AGULHAS MIL LTDA",
        "telefone": "21-912345678",
        "endereco": "Rua São Bento, nº 123",
        "email": "agulhasmil@gmail.com"
      },
      {
        "id": 2,
        "nome": "ELECTRIC INK",
        "telefone": "21-998741145",
        "endereco": "Av. Mario Cruz, nº 2002",
        "email": "eletricink@gmail.com"
      },
      {
        "id": 3,
        "nome": "CAPITAL PIERCING",
        "telefone": "21-998663347",
        "endereco": "Rua João de Barro, nº 198",
        "email": "capitalpiercing@gmail.com"
      }
    ]
  }
  ```

- **GET /fornecedoresId/id/{id}**

  Retorna o fornecedor correspondente ao id. Esquema da resposta:

  ```json
  {
    "fornecedores": [
      {
        "id": 2,
        "nome": "ELECTRIC INK",
        "telefone": "21-998741145",
        "endereco": "Av. Mario Cruz, nº 2002",
        "email": "eletricink@gmail.com"
      }
    ]
  }
  ```

- **POST /fornecedores**

  Insere um fornecedor na base de dados. Esquema da requisição:

  ```json
  {
    "nome": "POMADAS",
    "telefone": "21-912345678",
    "endereco": "Rua São Bento, nº 123",
    "email": "agulhasmil@gmail.com"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Fornecedor POMADAS inserido com sucesso"
  }
  ```

- **PUT /fornecedores/id/{id}**

  Atualiza um fornecedor de acordo com o id. Esquema da requisição:

  ```json
  {
    "nome": "LUVAS",
    "telefone": "21-912345678",
    "endereco": "Rua São Bento, nº 123",
    "email": "luvasmil@gmail.com"
  }
  ```

  Esquema da resposta:

  ```json
  {
    "msg": "Fornecedor LUVAS, com id 1, atualizado com sucesso",
    "Fornecedor": {
      "nome": "LUVAS",
      "telefone": "21-912345678",
      "endereco": "Rua São Bento, nº 123",
      "email": "luvasmil@gmail.com"
    },
    "erro": false
  }
  ```

- **DELETE /fornecedores/id/{id}**

  Deleta um fornecedor de acordo com o id. Esquema da resposta:

  ```json
  {
       "msg": "Fornecedor4 deletado com sucesso!",
       "erro": "false"
  }
  ```

### 👨‍👩‍👧‍👦 Clientes

- **GET /fornecedores**

  Retorna todos os dados do banco. Esquema da resposta:

  ```json
      {
          {
      "id": 1,
      "nome": "Eugênio Oliveira",
      "telefone": "21-994785122"
  },
  {
      "id": 2,
      "nome": "Olívia Ribeiro",
      "telefone": "21-988796335"
  },
  {
      "id": 3,
      "nome": "Mirtes Faria Lima",
      "telefone": "21-974659987"
  }

  }
  ```

- **GET /clientes/{id}**

  Retorna o cliente correspondente ao id. Esquema da resposta:

  ```json
  {
    {
    "dados": {
        "id": 1,
        "nome": "Eugênio Oliveira",
        "telefone": "21-994785122"
    }
    }
  }
  ```

- **POST /clientes**

  Insere um cliente na base de dados. Esquema da requisição:

  ```json
    {
    "nome": "Manuela Esteves",
    "telefone": "21-992246521"
    }
  ```

  Esquema da resposta

  ```json
    {
    "msg": "Usuário Manuela Esteves inserido com sucesso",
    "erro": false
    }
  ```

- **PUT /clientes/{id}**

  Atualiza um cliente de acordo com o id. Esquema da requisição:

  ```json
    {
    "nome": "Maria Esteves",
    "telefone": "21-992246521"
    }
  ```

  Esquema da resposta:

  ```json
    {
    "msg": "Usuário Maria Esteves, com id 1 atualizado com sucesso",
    "erro": false
    }
  ```

- **DELETE /clientes/{id}**

  Deleta um cliente de acordo com o id. Esquema da resposta:

  ```json
    {
    "msg": "Usuário 1 deletado com sucesso!",
    "erro": "false"
    }
  ```
  
### 📸 Tatuagens

- **GET/tatuagens**

  <p>Retorna todos os dados do banco.<p>
   Esquema da resposta:

  ```json
      {
        {
          "id": 1,
          "categoria": "Realismo",
          "link": "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/01/tatuagens-realistas-desenhos-impressionantes-para-te-inspirar-960x658.jpg",
          "id_tatuador": 1
      },
      {
          "id": 2,
          "categoria": "Maori",
          "link": "https://blog.pajaris.com.br/wp-content/uploads/2021/02/tatuagem-maori-26.jpg",
          "id_tatuador": 2
      },
      {
          "id": 3,
          "categoria": "OldSchool",
          "link": "https://www.minhatatuagem.com/wp-content/uploads/2020/01/tatuagem-oldschool-40.jpg",
          "id_tatuador": 3
      }

  }
  ```

- **GET /tatuagens/{id}**

  <p> Retorna a imagem correspondente ao id.<p> 
  Esquema da resposta:

  ```json
  {
      {
      "id": 1,
      "categoria": "Realismo",
      "link": "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/01/tatuagens-realistas-desenhos-impressionantes-para-te-inspirar-960x658.jpg",
      "id_tatuador": 1
      }
  }
  ```

- **POST /tatuagens**

  <p>Insere uma tatuagem na base de dados.<p> 
  
  Esquema da requisição:

  ```json
  {
    {
    "categoria": "Aquarela",
    "link": "https://s3-blog.tattoo2me.com/wp-content/uploads/2020/01/1*c0c4SlsntfZ9Dl1uxTO-hQ.jpeg",
    "id_tatuador": "2"
    }
  } 
  ```
  Esquema da resposta

  ```json
    {
    "msg": "Imagem da categoria: Aquarela do tatuador id: 2 foi inserida com sucesso",
    "erro": false
  }
  ```

- **PUT /tatuagens/{id}**

  <p>Atualiza uma imagem de acordo com o id.<p>
  Esquema da requisição:

  ```json
    {
    "categoria": "Aquarela",
    "link": "https://s3-blog.tattoo2me.com/wp-content/uploads/2020/01/1*c0c4SlsntfZ9Dl1uxTO-hQ.jpeg",
    "id_tatuador": "3"
    }
  ```

  Esquema da resposta:

  ```json
    {
    "msg": "Imagem da Aquarela, com id 6 atualizada com sucesso",
    "erro": false
    }
  ```

- **DELETE /tatuagens/{id}**

    <p>Deleta uma imagem de acordo com o id.<p> 
    Esquema da resposta:

  ```json
   {
    "msg": "Imagem do id 6 deletada com sucesso!",
    "erro": "false"
  }
  ```


  ### 🗓️Agendamentos
  

- **GET /agendamentos**

  Retorna todos os dados do banco. Esquema da resposta:

  ```json
	{
		"id": 1,
		"data": "2022-08-15",
		"horario": "14:00",
		"id_cliente": 1,
		"id_tatuador": 2
	},
	{
		"id": 2,
		"data": "2022-08-18",
		"horario": "15:00",
		"id_cliente": 2,
		"id_tatuador": 3
	},
	{
		"id": 3,
		"data": "2022-08-19",
		"horario": "13:00",
		"id_cliente": 3,
		"id_tatuador": 1
	},
	{
		"id": 4,
		"data": "2022-08-30",
		"horario": "09:00",
		"id_cliente": 1,
		"id_tatuador": 2
	}
  ```

- **GET /agendamentos/{id}**

  Retorna o agendamento correspondente ao id.

   Esquema da resposta:

 ```json
  {
	"id": 1,
	"data": "2022-08-15",
	"horario": "14:00",
	"id_cliente": 1,
	"id_tatuador": 2

```

- **POST /agendamentos**

  Insere um agendamento na base de dados. Esquema da requisição:

  ```json
  {
    "data": "2022-08-30",
		"horario": "19:00",
		"id_cliente": 1,
		"id_tatuador": 2
  }
  ```

  Esquema da resposta

  ```json
  {
    "mensagem": "Agendamento  inserido com sucesso",
   
  }
  ```

- **PUT /agendamentos/{id}**

  Atualiza um agendamento de acordo com o id. Esquema da requisição:

  ```json
  {
    "data": "2022-08-30",
		"horario": "20:00",
		"id_cliente": 3,
		"id_tatuador": 1
  }
  ```

  Esquema da resposta:

  ```json
  {
    "msg": "Agendamento com id 3 atualizado com sucesso"
    
  }
  ```

- **DELETE /agendamentos/{id}**

  Deleta um agendamento de acordo com o id. Esquema da resposta:

  ```json
  {
    "msg": "Agendamento com id 3 deletado com sucesso"
  
  }
  ```
  ## Time de desenvolvimento

  - [Alonso Estevam](https://www.linkedin.com/in/alonso-estevam/)
  - [Beatriz Mioranza](https://www.linkedin.com/in/beatrizmioranza/)
  - [Erika Rodrigues](https://www.linkedin.com/in/erikatav-rodrigues/)
  - [Josiane Rocha](https://www.linkedin.com/in/josiane-r-s-lima-santos/)
  - [Pedro Garrido](https://www.linkedin.com/in/pedro-garrido-1a8482205/)
  - [Rômulo Miranda](https://www.linkedin.com/in/romulo-omiranda/)
  

