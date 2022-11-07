/* eslint-disable react/jsx-key */
import { Button, Dialog, DialogRootProps } from '@snowye-ui/react';
import { useArgs } from '@storybook/client-api';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Overlay/Dialog',
  component: Dialog.Root,
  args: {
    open: false
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    open: {
      control: 'boolean'
    }
  }
} as Meta;

export const Default: Story<DialogRootProps> = () => {
  const [args, updateArgs] = useArgs();

  return (
    <Dialog.Root onOpenChange={open => updateArgs({ open })} {...args}>
      <Dialog.Trigger key='1'>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content key='2'>
        <Dialog.Title>Lorem Ipsum dolor</Dialog.Title>
        <Dialog.Description>
          Lorem ipsum dolor sit amet scelerisque in dictum non consectetur a
          erat nam at lectus urna duis convallis convallis tellus
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
};
