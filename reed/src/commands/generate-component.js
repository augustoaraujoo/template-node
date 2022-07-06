module.exports = {
  name: 'generate-component',
  description: 'Generates a new component.',
  run: async (toolbox) => {
    toolbox.print.info('Welcome to the component generator.');
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
    const verifyPackage = await filesystem.read('package.json', 'json');
    const packageSystem = !!verifyPackage.dependencies['express'];
    
    await template.generate({
      template: 'component.js.ejs',
      target: 'src/components/index.js',
      props: { name: parameters.first },
    });

    const systemTemplate = packageSystem ? 'log2.js.ejs' : 'log.js.ejs';
    if (!packageSystem) {
      error('You must install react to use this generator.')
    } else {
      success('vc tem a biblioteca')
    }
    await template.generate({
      template: systemTemplate,
      target: 'src/components/log.js',
    });
    success(`Component ${parameters.first} generated successfully.`);
    success(`o projeto está em desenvolvimento, aguarde...`); 
  },
}
