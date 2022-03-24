import { baseColors } from './colors';

export const defaultTheme = {
  baseColors,
};

type DefaultTheme = typeof defaultTheme;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends DefaultTheme {}
export type Color = keyof typeof baseColors;
export type AccentColor = keyof Pick<typeof baseColors, 'green' | 'golden'>;
export type Weight = 'normal' | 'medium' | 'bold';
export type FontFamily = 'dmSans' | 'dmMono' | 'tactic';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DefaultTheme {}
}
export interface ThemeProps {
  theme: Theme;
}

// The app is wrapped in a provider and all styled components already implicitly
// have access to the `theme` prop without it needing to be passed in.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProvidedThemeProps extends Partial<ThemeProps> {}
