/* eslint-disable react/jsx-key */
import { TextInput, TextInputRootProps } from '@snowye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Envelope, Eye, EyeSlash } from 'phosphor-react';

export default {
  title: 'Form/TextInput',
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder='Placeholder' />
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.LeftIcon>
        <Envelope weight='bold' />
      </TextInput.LeftIcon>,
      <TextInput.Input placeholder='Placeholder' />
    ]
  }
};

export const WithPrefix: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Prefix>call.co/</TextInput.Prefix>,
      <TextInput.Input placeholder='Placeholder' />
    ]
  }
};

export const WithError: StoryObj<TextInputRootProps> = {
  args: {
    error: true
  }
};

export const Disabled: StoryObj<TextInputRootProps> = {
  args: {
    disabled: true,
    children: <TextInput.Input placeholder='Placeholder' />
  }
};

export const Password: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.LeftIcon>
        <Envelope weight='bold' />
      </TextInput.LeftIcon>,
      <TextInput.Input placeholder='Type your password...' type='password' />,
      <TextInput.RightIcon
        activeIcon={<Eye weight='bold' />}
        inactiveIcon={<EyeSlash weight='bold' />}
      />
    ]
  }
};
