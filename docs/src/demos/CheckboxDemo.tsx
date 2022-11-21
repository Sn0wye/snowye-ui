/** @jsxImportSource react */
import { Checkbox, Surface, Text } from '@snowye-ui/react';

const AvatarDemo = () => {
  return (
    <Surface
      as='label'
      css={{
        display: 'flex',
        gap: '$2'
      }}
    >
      <Checkbox />
      <Text size='sm'>I accept the terms.</Text>
    </Surface>
  );
};

export default AvatarDemo;
