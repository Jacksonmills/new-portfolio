import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import Logo from '../Logo';

import { Twitter, GitHub } from 'react-feather';

const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <LogoNavLink to='/'>
          <StyledLogo>Jackson Mills</StyledLogo>
        </LogoNavLink>
        <StyledNavLink to='/about'>About</StyledNavLink>
        <StyledNavLink to='/work'>Work</StyledNavLink>
        <StyledNavLink to='/contact'>Contact</StyledNavLink>
      </Wrapper>
      <UserUtil>
        <UtilLink href='https://twitter.com/Jacksonmills'>
          <Twitter style={{ stroke: 'currentColor' }} />
        </UtilLink>
        <UtilLink href='https://github.com/Jacksonmills'>
          <GitHub style={{ stroke: 'currentColor' }} />
        </UtilLink>
      </UserUtil>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
`;

const StyledLogo = styled(Logo)`
  font-family: 'Archivo', sans-serif;
`;

const LogoNavLink = styled(NavLink)``;

const StyledNavLink = styled(NavLink)`
  font-size: ${32 / 16}rem;
  font-weight: bolder;
`;

const Wrapper = styled.nav`
  display: flex;
  flex: 1;
  gap: 48px;
  align-items: center;
  height: 100px;
  border-bottom: 8px solid ${COLORS.black};
  padding: 12px 24px;

  ${LogoNavLink},
  ${StyledNavLink} {
    color: ${COLORS.black};
    text-decoration: none;
  }
`;

const UserUtil = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 0 1 20vw;
  background-color: hsl(345, 100%, 50%);
  border-left: 8px solid ${COLORS.black};
  border-bottom: 8px solid ${COLORS.black};
`;

const UtilLink = styled.a`
  color: ${COLORS.black};

  --size: ${36 / 16}rem;
  svg {
    width: var(--size);
    height: var(--size);
  }
`;

export default Header;
