import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <h1>Welcome home</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: hsl(76, 100%, 50%);
`;

export default Home;
