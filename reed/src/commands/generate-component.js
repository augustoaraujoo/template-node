module.exports = {
  name: 'generate-struct',
  description: 'Generates a new structure.',
  run: async (toolbox) => {
    toolbox.print.info('≧◠ᴥ◠≦✊ welcome !!');
    const {
      parameters,
      template,
      filesystem,
      print: { success, error },
    } = toolbox;
    if (parameters.first === undefined) {
      error('You must provide a component name.')
      return;
    }
    success(`the project is under development 🚧`);
    const verifyPackage = await filesystem.read('package.json', 'json');
    const packageSystem = !!verifyPackage.dependencies['express'];
    // fix the file name [log2,log]
    const systemTemplate = packageSystem ? 'log2.js.ejs' : 'log.js.ejs';
    if (!packageSystem) {
      error('You must install express to use this generator.')
      return
    } else {
      success('Im creating the folders for you, (👍≖‿‿≖)👍 like 👍(≖‿‿≖👍)')
    }
    await template.generate({
      template: 'server.ts.ejs',
      target: 'src/shared/infra/http/server.ts',
      props: { name: parameters.first },
    });
    await template.generate({
      template: systemTemplate,
      target: 'src/components/useCase.ts',
    });
    success(`structure ${parameters.first} generated successfully.`);
  },
}
