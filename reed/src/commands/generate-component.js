module.exports = {
  name: 'g',
  description: 'Generates a new structure.',
  run: async (toolbox) => {
    toolbox.print.info('≧◠ᴥ◠≦✊ welcome !!');
    const {
      template,
      filesystem,
      print: { success, error },
    } = toolbox;
    success(`the project is under development 🚧`);
    const verifyPackage = await filesystem.read('package.json', 'json');
    const packageSystem = !!verifyPackage.dependencies['express'];
    // fix the file name [log2,log]
    const systemTemplate = packageSystem ? 'express.ts.ejs' : 'noExpress.ts.ejs';
    if (!packageSystem) {
      error('You must install express to use this generator.')
      return
    } else {
      success('Im creating the folders for you, (👍≖‿‿≖)👍 like 👍(≖‿‿≖👍)')
    }
    /* MODULES */
    // arrumar templates
    await template.generate({
      template: systemTemplate,
      target: 'src/modules/example/dtos/IExampleDTO.ts',
    });
    await template.generate({
      template: systemTemplate,
      target: 'src/modules/example/infra/orm/entities/Example.ts',
    });
    await template.generate({
      template: systemTemplate,
      target: 'src/modules/example/infra/orm/repositories/ExampleRepository.ts',
    });
    await template.generate({
      template: systemTemplate,
      target: 'src/modules/example/repositories/IExampleRepository.ts',
    });
    await template.generate({
      template: systemTemplate,
      target:
        'src/modules/example/repositories/in-memory/ExampleRepositoryInMemory.ts',
    });
    await template.generate({
      template: systemTemplate,
      target:
        'src/modules/example/useCase/exampleCreate/ExampleCreateUseCase.ts',
    });
    await template.generate({
      template: systemTemplate,
      target:
        'src/modules/example/useCase/exampleCreate/ExampleCreateUseCase.spec.ts',
    });
    await template.generate({
      template: systemTemplate,
      target:
        'src/modules/example/useCase/exampleCreate/ExampleCreateController.ts',
    });
    /* end \MODULES */
    /* SHARED -> */
    await template.generate({
      template: 'server.ts.ejs',
      target: 'src/modules/shared/infra/http/server.ts',
    });

    await template.generate({
      template: 'express.ts.ejs',
      target: 'src/modules/shared/infra/http/middlewares/express.ts',
    })
    await template.generate({
      template: 'express.ts.ejs',
      target: 'src/modules/shared/infra/http/routes/index.ts',
    })
    await template.generate({
      template: 'example.routes.ts.ejs',
      target: 'src/modules/shared/infra/http/routes/example.routes.ts',
    });
    /* end \SHARED -> */
    success(`structure generated successfully.`);
  },
}
