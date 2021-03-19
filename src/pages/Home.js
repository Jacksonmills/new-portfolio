import React from 'react';
import styled from 'styled-components';

import MaxWidthContainer from '../components/MaxWidthContainer';

const Home = () => {
  return (
    <Wrapper>
      <MaxWidthContainer>
        <Welcome>
          Cat dad, fighting games and Dragon Ball Z. A background in art/design,
          building cool things on the internet
        </Welcome>
      </MaxWidthContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: hsl(76, 100%, 50%);
`;

const Welcome = styled.h1`
  font-size: ${54 / 16}rem;
`;

export default Home;
