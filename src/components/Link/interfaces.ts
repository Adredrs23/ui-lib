import { AnchorHTMLAttributes } from 'react';

import { CSSProperties } from 'react';

export interface EmotionProps {
  style?: CSSProperties;
  className?: string;
}

export type LinkType = 'normal' | 'withIcon';

export type LinkColor = 'black' | 'white';

export type LinkAnimation = 'in' | 'out';

export interface LinkProps
  extends EmotionProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  accentColor?: LinkColor;
  animate?: LinkAnimation;
  variant?: LinkType;
}
