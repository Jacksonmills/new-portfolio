import React from 'react';
import styled from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import MaxWidthContainer from '../components/MaxWidthContainer';

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 1], [0, 2]);

  return (
    <Wrapper>
      <MaxWidthContainer>
        <Welcome>
          Cat dad, fighting games and Dragon Ball Z. A background in art/design,
          building cool things on the internet
        </Welcome>
        <Welcome>
          Cat dad, fighting games and Dragon Ball Z. A background in art/design,
          building cool things on the internet
        </Welcome>
        <Welcome>
          Cat dad, fighting games and Dragon Ball Z. A background in art/design,
          building cool things on the internet
        </Welcome>
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
  background-color: hsl(69, 100%, 50%);
`;

const Welcome = styled.h1`
  font-size: ${54 / 16}rem;
`;

export default Home;
