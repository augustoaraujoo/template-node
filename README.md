> :construction: Projeto em construção :construction:

# introduction
    a package that will streamline the folder creation process and also install the correct dependencies for your backend application


Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Instalação](#installation)
   * [Como usar](#como-usar)
      * [Structure](#Structure)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->
### Features

- [ ] installed libraries
- [ ] folder structure

# installation
    # Instale as dependências
    # do you need install *express* !
    $ npm install express
    $ npm i repo-express-example-node
    $ npx reed g    
# Structure

```
\---src
    +---modules
    |   \---example
    |       +---dtos
    |       |       IExampleDTO.ts
    |       |       
    |       +---infra
    |       |   \---orm
    |       |       +---entities
    |       |       |       Example.ts
    |       |       |       
    |       |       \---repositories
    |       |               ExampleRepository.ts
    |       |               
    |       +---repositories
    |       |   |   IExampleRepository.ts
    |       |   |   
    |       |   \---in-memory
    |       \---useCases
    |           \---exampleCreate
    |                   ExampleCreateController.ts
    |                   ExampleCreateUseCase.spec.ts
    |                   ExampleCreateUseCase.ts
    |                   
    +---shared
    |   \---infra
    |       \---http
    |           |   server.ts
    |           |   
    |           +---middlewares
    |           \---routes
    |                   example.routes.ts
    |                   index.ts
    |                   
    \---utils
```