import React, { FC } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { ThemeProps } from './Theme';

export const ThemeProvider: FC<ThemeProps> = ({ theme, children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
