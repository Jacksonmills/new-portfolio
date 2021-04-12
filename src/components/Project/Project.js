import React from 'react';
import styled from 'styled-components';

import MaxWidthContainer from '../MaxWidthContainer';

import { COLORS } from '../../constants';

const Project = ({ title, desc }) => {
  return (
    <MaxWidthContainer>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </MaxWidthContainer>
  );
};

const Title = styled.h2`
  font-size: ${32 / 16}rem;
  line-height: 1.2;

  @media (min-width: 798px) {
    font-size: ${44 / 16}rem;
  }
`;

const Desc = styled.p`
  font-size: ${22 / 16}rem;
  font-weight: bold;
`;

export default Project;
