import { Heading, Popover, PopoverProps, Text } from '@snowye-ui/react';
import type { Meta } from '@storybook/react';
import { Info } from 'phosphor-react';

import { IconButton } from '../IconButton';

export default {
  title: 'Feedback/Popover',
  component: Popover
} as Meta<PopoverProps>;

export const Default = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <IconButton>
        <Info />
      </IconButton>
    </Popover.Trigger>
    <Popover.Content side='bottom'>
      <Heading size='md'>Popover</Heading>
      <Text size='sm'>This is a Popover component</Text>
    </Popover.Content>
  </Popover.Root>
);

export const WithoutArrow = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <IconButton>
        <Info />
      </IconButton>
    </Popover.Trigger>
    <Popover.Content side='bottom' hideArrow>
      <Heading size='md'>Popover</Heading>
      <Text size='sm'>This is a Popover component</Text>
    </Popover.Content>
  </Popover.Root>
);

export const DefaultOpen = () => (
  <Popover.Root defaultOpen>
    <Popover.Trigger asChild>
      <IconButton>
        <Info />
      </IconButton>
    </Popover.Trigger>
    <Popover.Content side='bottom'>
      <Heading size='md'>Popover</Heading>
      <Text size='sm'>This is a Popover component</Text>
    </Popover.Content>
  </Popover.Root>
);
