> :construction: Projeto em construção :construction:

# introduction
    a package that will streamline the folder creation process and also install the correct dependencies for your backend application


How to use 💻 
=================
<!--ts-->
   * [About](#About)
   * [Installation](#installation)
      * [Structure](#Structure)
   * [Technologies](#technologies)
<!--te-->

# installation
    $ npm i repo-express-example-node
    $ npx reed g   

### About

*I was tired of always having to create folders and files for my projects several times, so I decided to speed up the creation!!*


### Features

- [ ] installed libraries
- [ ] folder structure
- [ ] generate automatic templates in the application
# Structure

```
📂-src
    📂-modules
    |   📂-example
    |       📂-dtos
    |       |   IExampleDTO.ts
    |       📂-infra
    |       |   📂-orm
    |       |       📂-entities
    |       |       |    Example.ts
    |       |       📂-repositories
    |       |            ExampleRepository.ts
    |       📂-repositories
    |       |   |   IExampleRepository.ts
    |       |   📂-in-memory
    |       |        ExampleRepositoryInMemory.ts              
    |       📂-useCases
    |           📂-exampleCreate
    |                   ExampleCreateController.ts
    |                   ExampleCreateUseCase.spec.ts
    |                   ExampleCreateUseCase.ts 
    📂-shared
    |   📂-infra
    |       📂-http
    |           | server.ts
    |           📂-middlewares
    |           📂-routes
    |                example.routes.ts
    |                index.ts
    📂-utils
```

➡️ **Technologies** : 
*https://www.npmjs.com/package/repo-express-example-node#Sobre*