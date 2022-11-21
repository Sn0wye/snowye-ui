/** @jsxImportSource react */

import { Button } from '@snowye-ui/react';
import { styled } from '../styles/stitches';

const Flex = styled('div', {
  display: 'flex',
  gap: '$2'
});

const ButtonDemo = () => {
  return (
    <Flex>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='tertiary'>Tertiary</Button>
      <Button variant='danger'>Danger</Button>
    </Flex>
  );
};

export default ButtonDemo;
