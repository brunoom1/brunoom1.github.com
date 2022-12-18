import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  strong {
    font-size: 28px;
  }
`;

export const HeaderBranding = () => {
  return <DivContainer className={'p-2'}>
    <a href="#">
      <strong>Gabriel Mendonça</strong>
      <div>
        (fullstack developer)
      </div>
    </a>
  </DivContainer>
}
