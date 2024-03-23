import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Color, Space } from '../styles/variables';

const _Header = styled.header`
  padding: ${Space * 2}px;
  border-bottom: 1px solid ${Color.MONO_0};
`;

type Props = {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export const ActionLayout: React.FC<Props> = ({ leftContent, rightContent }) => {
  return (
    <>
      <_Header>
        <Flex align="center" justify="space-between">
          {leftContent}
          {rightContent}
        </Flex>
      </_Header>

      <Box as="main" height="100%" py={Space * 2}>
        <Outlet />
      </Box>
    </>
  );
};
