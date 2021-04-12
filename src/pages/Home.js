import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';

import Welcome from '../components/Welcome';
import Project from '../components/Project';

const Home = () => {
  const welcomeMessage =
    '“Cat dad, fighting games and Dragon Ball Z. A background in art/design, building cool things on the internet”';

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      desc:
        'Cat dad, fighting games and Dragon Ball Z. A background in art/design, building cool things on the internet.',
    },
    {
      id: 2,
      title: 'Project 2',
      desc:
        'Cat dad, fighting games and Dragon Ball Z. A background in art/design, building cool things on the internet.',
    },
    {
      id: 3,
      title: 'Project 3',
      desc:
        'Cat dad, fighting games and Dragon Ball Z. A background in art/design, building cool things on the internet.',
    },
  ];

  return (
    <Wrapper>
      <Welcome content={welcomeMessage} />
      <ProjectList>
        {projects.map((project) => {
          return (
            <ProjectWrapper key={project.id}>
              <Project {...project} />
            </ProjectWrapper>
          );
        })}
      </ProjectList>
    </Wrapper>
  );
};

const ProjectWrapper = styled.div`
  background-color: ${COLORS.secondary};
  border-radius: 10px;
  padding: 32px 0;
`;

const ProjectList = styled.div`
  grid-area: main;
  display: flex;
  grid-column-gap: 8px;

  ${ProjectWrapper}:first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  ${ProjectWrapper}:last-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-template-areas:
    'header header header'
    'main main main'
    'footer footer footer';
  grid-column-gap: 8px;
  background-color: ${COLORS.black};
  border-bottom: 8px solid ${COLORS.black};
`;

export default Home;
