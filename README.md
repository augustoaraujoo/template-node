> :construction: Projeto em construΓ§Γ£o :construction:

# introduction
    a package that will streamline the folder creation process and also install the correct dependencies for your backend application


How to use π» 
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
π-src
    π-modules
    |   π-example
    |       π-dtos
    |       |   IExampleDTO.ts
    |       π-infra
    |       |   π-orm
    |       |       π-entities
    |       |       |    Example.ts
    |       |       π-repositories
    |       |            ExampleRepository.ts
    |       π-repositories
    |       |   |   IExampleRepository.ts
    |       |   π-in-memory
    |       |        ExampleRepositoryInMemory.ts              
    |       π-useCases
    |           π-exampleCreate
    |                   ExampleCreateController.ts
    |                   ExampleCreateUseCase.spec.ts
    |                   ExampleCreateUseCase.ts 
    π-shared
    |   π-infra
    |       π-http
    |           | server.ts
    |           π-middlewares
    |           π-routes
    |                example.routes.ts
    |                index.ts
    π-utils
```

β‘οΈ **Technologies** : 
*https://www.npmjs.com/package/repo-express-example-node#Sobre*