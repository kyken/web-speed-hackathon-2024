import { useRef } from 'react';
import styled from 'styled-components';

import { Color } from '../styles/variables';

const _Wrapper = styled.div`
  width: 100%;
`;

export const Separator: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <_Wrapper ref={wrapperRef}>
      <div aria-hidden={true} style={{ background: Color.MONO_30, height: '1px', opacity: 0.5, width: '100%' }} />
    </_Wrapper>
  );
};
