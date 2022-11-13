/** @jsxImportSource react */
import { TextInput } from '@snowye-ui/react';
import { Envelope, Eye, EyeSlash } from 'phosphor-react';
import { FunctionComponent } from 'react';

export const TextInputDemo: FunctionComponent = () => {
  return (
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
  );
};

export default TextInputDemo;
