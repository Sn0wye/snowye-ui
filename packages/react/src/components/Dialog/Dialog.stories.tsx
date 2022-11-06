/* eslint-disable react/jsx-key */
import { Button, Dialog, DialogRootProps } from '@snowye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Overlay/Dialog',
  component: Dialog.Root,
  args: {
    children: [
      <Dialog.Trigger key='1'>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>,
      <Dialog.Content key='2'>
        <Dialog.Title>Lorem Ipsum dolor</Dialog.Title>
        <Dialog.Description>
          Lorem ipsum dolor sit amet scelerisque in dictum non consectetur a
          erat nam at lectus urna duis convallis convallis tellus
        </Dialog.Description>
      </Dialog.Content>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Default: StoryObj<DialogRootProps> = {};
