import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  let location = useLocation();

  useEffect(() => {
    addEventListeners();
    handleHoverEvents();
    return () => {
      removeEventListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = () => {
    setIsClicked(true);
  };

  const onMouseUp = () => {
    setIsClicked(false);
  };

  const onMouseEnter = () => {
    setIsHidden(false);
  };

  const onMouseLeave = () => {
    setIsHidden(true);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleHoverEvents = () => {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseover', () => setIsHovered(true));
      el.addEventListener('mouseout', () => setIsHovered(false));
    });
  };

  return (
    <Wrapper
      style={{
        transform: `translateX(${position.x}px) translateY(${position.y}px) translateZ(1px)`,
        '--content': isHovered ? "'🤡'" : isClicked ? "'💩'" : "'👽'",
        '--visibility': isHidden ? 'hidden' : 'visible',
      }}
    />
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  visibility: var(--visibility);
  border-radius: 50%;

  &:before {
    content: var(--content);
    font-size: 3rem;
    transition: content 500ms ease;
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: -5px;
    background-color: black;
    width: 1.2rem;
    height: 0.8rem;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    transform: rotate(-45deg);
  }
`;

export default Cursor;
