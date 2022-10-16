import { TextInput, TextInputRootProps } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Envelope, Lock, User } from 'phosphor-react';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Placeholder'
  },
  argTypes: {
    disabled: {
      type: 'boolean',
      defaultValue: false
    },
    invalid: {
      type: 'boolean',
      defaultValue: false
    },
    leftIcon: {
      type: 'symbol',
      options: [<Lock key='q' />, <User key='p' />],
      control: 'select'
    },
    error: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as Meta;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    leftIcon: <Envelope weight='bold' />,
    placeholder: 'john@doe.com'
  }
};

export const WithPrefix: StoryObj<TextInputRootProps> = {
  args: {
    prefix: 'call.com/'
  }
};

export const WithError: StoryObj<TextInputRootProps> = {
  args: {
    error: true
  }
};

export const Disabled: StoryObj<TextInputRootProps> = {
  args: {
    disabled: true
  }
};

export const Password: StoryObj<TextInputRootProps> = {
  args: {
    type: 'password',
    leftIcon: <Lock weight='bold' />
  }
};
