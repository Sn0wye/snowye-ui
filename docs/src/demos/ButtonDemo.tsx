/** @jsxImportSource react */

import { Button } from '@snowye-ui/react';
import { styled } from '../styles/stitches';

const Flex = styled('div', {
  display: 'flex',
  gap: '$2'
});

const ButtonDemo = () => {
  return (
    <Flex
      css={{
        flexDirection: 'column',
        gap: '$4'
      }}
    >
      <Flex
        css={{
          justifyContent: 'center'
        }}
      >
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='tertiary'>Tertiary</Button>
        <Button variant='danger'>Danger</Button>
      </Flex>
      <Flex
        css={{
          justifyContent: 'center'
        }}
      >
        <Button size='sm'>Small</Button>
        <Button size='md'>Medium</Button>
        <Button size='lg'>Large</Button>
        <Button loading>Full</Button>
        <Button disabled>Disabled</Button>
      </Flex>

      <Button full>Full</Button>
    </Flex>
  );
};

export default ButtonDemo;
