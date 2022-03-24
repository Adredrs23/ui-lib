import styled from '@emotion/styled';
import React from 'react';

import { Link } from './Link';

export const Links = () => {
  return (
    <>
      <LinkContainer>
        <Link href="https://eos.io" accentColor="white" variant="normal">
          Link text
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link href="https://eos.io" accentColor="white" animate="in">
          Link text
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link href="https://eos.io" variant="normal">
          Link text
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link href="https://eos.io" animate="in">
          Link text
        </Link>
      </LinkContainer>
    </>
  );
};

const LinkContainer = styled.div`
  margin-top: 5px;
`;

export default {
  title: 'Design System/Links',
  component: Link,
};
