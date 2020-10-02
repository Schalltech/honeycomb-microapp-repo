import { configure, addParameters, addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { addReadme } from 'storybook-readme';

addDecorator(withPropsTable);
addDecorator(addReadme);

const req = require.context('..', true, /^(?!node_modules).\/((?!node_modules).)*\/*\/[^\/]+\/*.story.js$/);
configure(() => {
  req.keys().forEach((filename) => {
    req(filename);
  });
}, module);

addParameters({
  info: {
    inline: false,
  },
});
