const files = [
    {
        template: 'charts/{project}/templates/_helpers.tpl.template',
        destination: 'charts/{project}/templates/_helpers.tpl'
    },
    {
        template: 'charts/{project}/templates/autoscale.yaml.template',
        destination: 'charts/{project}/templates/autoscale.yaml'
    },
    {
        template: 'charts/{project}/templates/deployment.yaml.template',
        destination: 'charts/{project}/templates/deployment.yaml'
    },
    {
        template: 'charts/{project}/templates/ingress.yaml.template',
        destination: 'charts/{project}/templates/ingress.yaml'
    },
    {
        template: 'charts/{project}/templates/NOTES.txt.template',
        destination: 'charts/{project}/templates/NOTES.txt'
    },
    {
        template: 'charts/{project}/templates/secrets.yaml.template',
        destination: 'charts/{project}/templates/secrets.yaml'
    },
    {
        template: 'charts/{project}/templates/service.yaml.template',
        destination: 'charts/{project}/templates/service.yaml'
    },
    {
        template: 'charts/{project}/.helmignore.template',
        destination: 'charts/{project}/.helmignore'
    },
    {
        template: 'charts/{project}/Chart.yaml.template',
        destination: 'charts/{project}/Chart.yaml'
    },
    {
        template: 'charts/{project}/values.yaml.template',
        destination: 'charts/{project}/values.yaml'
    },
    { template: 'src/index.js.template', destination: 'src/index.js' },
    { template: 'test/test.js.template', destination: 'test/test.js' },
    { template: 'editorconfig.template', destination: '.editorconfig' },
    { template: 'eslintignore.template', destination: '.eslintignore' },
    { template: 'eslintrc.json.template', destination: '.eslintrc.json' },
    { template: 'gitattributes.template', destination: '.gitattributes' },
    { template: 'gitignore.template', destination: '.gitignore' },
    { template: 'LICENSE.template', destination: 'LICENSE' },
    { template: 'package.json.template', destination: 'package.json' },
    { template: 'prettierrc.template', destination: '.prettierrc' },
    { template: 'README.md.template', destination: 'README.md' }
];

export default files;
