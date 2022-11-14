/** @jsxImportSource react */
import { Box, TextInput } from '@snowye-ui/react';
import { Envelope, Eye, EyeSlash, User } from 'phosphor-react';
import { FunctionComponent } from 'react';

export const TextInputDemo: FunctionComponent = () => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        background: 'transparent',
        gap: '$2'
      }}
    >
      <TextInput.Root>
        <TextInput.LeftIcon>
          <User weight='bold' />
        </TextInput.LeftIcon>
        <TextInput.Input placeholder='Type your username...' />
      </TextInput.Root>
      <TextInput.Root>
        <TextInput.LeftIcon>
          <Envelope weight='bold' />
        </TextInput.LeftIcon>
        <TextInput.Input placeholder='Type your password...' type='password' />
        <TextInput.RightIcon
          activeIcon={<Eye weight='bold' />}
          inactiveIcon={<EyeSlash weight='bold' />}
        />
      </TextInput.Root>
    </Box>
  );
};

export default TextInputDemo;
