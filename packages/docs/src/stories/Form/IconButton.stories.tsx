import { IconButton, IconButtonProps } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'phosphor-react';

export default {
  title: 'Form/IconButton',
  component: IconButton,
  args: {
    children: <Plus />,
    variant: 'primary',
    size: 'md'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      type: 'boolean',
      defaultValue: false
    },
    loading: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as Meta<IconButtonProps>;

export const Primary: StoryObj<IconButtonProps> = {};

export const Secondary: StoryObj<IconButtonProps> = {
  args: {
    variant: 'secondary'
  }
};

export const Tertiary: StoryObj<IconButtonProps> = {
  args: {
    variant: 'tertiary'
  }
};

export const Disabled: StoryObj<IconButtonProps> = {
  args: {
    disabled: true
  }
};

export const Loading: StoryObj<IconButtonProps> = {
  args: {
    loading: true
  }
};
