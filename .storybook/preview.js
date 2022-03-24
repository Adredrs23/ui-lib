import { addDecorator, addParameters } from '@storybook/react';
import { themeProviderDecorator } from '../src/components/decorators';

// Option defaults.
addParameters({
  options: {
    showRoots: true,
  },
});

// decorators
addDecorator((story) => themeProviderDecorator(story));
