import React, { FC, forwardRef, Ref } from 'react';
import styled from '@emotion/styled';

import { ProvidedThemeProps } from '../../theme';

import { LinkProps } from './interfaces';

export const Link: FC<LinkProps> = forwardRef(
  (
    {
      animate = 'out',
      children,
      className,
      accentColor = 'black',
      target,
      variant,
      ...htmlAttributes
    },
    ref: Ref<HTMLAnchorElement>,
  ) => {
    return (
      <Anchor
        ref={ref}
        accentColor={accentColor}
        data-animate={animate}
        data-variant={variant}
        className={className}
        target={target}
        {...htmlAttributes}
      >
        <span>{children}</span>
      </Anchor>
    );
  },
);

Link.displayName = 'Link';

const Anchor = styled.a<
  ProvidedThemeProps & { accentColor: 'black' | 'white' }
>`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.75;
  color: ${({ accentColor, theme }) => theme.baseColors[accentColor]};
  opacity: 1;
  transition: opacity 0.4s ease-in;

  // Variants
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${({ accentColor, theme }) =>
      theme.baseColors[accentColor]};
    transition: width 0.4s ease-in;
  }

  &:not(:disabled):hover {
    &::before {
      width: 0;
    }
  }

  &[data-variant='withIcon'] {
    display: inline-flex;
    width: fit-content;

    .arrow-northeast {
      margin-left: 15px;
    }
  }

  &[data-animate='in'] {
    &::before {
      width: 0;
      left: 0;
    }

    &:not(:disabled):hover {
      &::before {
        width: 100%;
      }
    }
  }

  &.focus-visible {
    box-shadow: none;
    outline: 1px solid
      ${({ accentColor, theme }) => theme.baseColors[accentColor]};
    outline-offset: 10px;
  }

  .has-touch &:focus {
    text-decoration: underline;
  }
`;
