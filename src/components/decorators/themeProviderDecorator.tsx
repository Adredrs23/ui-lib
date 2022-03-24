import React from 'react';

import { ThemeProvider, defaultTheme } from '../../theme';

export const themeProviderDecorator = (story) => {
  return <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>;
};
