import React from 'react';
import styled from 'styled-components';

import MaxWidthContainer from '../MaxWidthContainer';

const Welcome = ({ content }) => {
  return (
    <Wrapper>
      <MaxWidthContainer>
        <Message>{content}</Message>
      </MaxWidthContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  grid-area: header;
  padding: 32px 0;
  flex: 1;
  background-color: hsl(69, 100%, 50%);
  border-bottom: 8px solid hsl(0, 0%, 0%);
`;

const Message = styled.h1`
  font-size: ${36 / 16}rem;
  line-height: 1.2;

  @media (min-width: 798px) {
    font-size: ${54 / 16}rem;
  }
`;

export default Welcome;
