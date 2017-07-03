import React from 'react';
import { HEADER } from '../constants'

const Title = () => {
  const { GREEN, RED, YELLOW, BLUE } = HEADER
  return (
    <div>
      <span style={{color: BLUE}}>Z</span>
      <span style={{color: RED}}>F</span>
      <span style={{color: YELLOW}}>M</span>
      <span style={{color: BLUE}}>A</span>
      <span style={{color: GREEN}}>P</span>
      <span style={{color: RED}}>S</span>
    </div>
  );
};

export default Title;