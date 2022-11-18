import {
  Heading,
  Popover,
  PopoverProps,
  Surface,
  Text
} from '@snowye-ui/react';
import type { Meta } from '@storybook/react';
import { Info } from 'phosphor-react';

import { IconButton } from '../IconButton';

export default {
  title: 'Feedback/Popover',
  component: Popover,
  decorators: [
    Story => (
      <Surface
        css={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '$gray200'
        }}
      >
        {Story()}
      </Surface>
    )
  ]
} as Meta<PopoverProps>;

export const Default = () => {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <IconButton>
            <Info />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content side='top'>
          <Heading size='md'>Popover</Heading>
          <Text size='sm'>This is a Popover component</Text>
        </Popover.Content>
      </Popover.Root>
    </>
  );
};
