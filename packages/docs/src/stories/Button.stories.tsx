import { Box, Button, ButtonProps } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'LABEL',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    full: {
      type: 'boolean',
      defaultValue: false
    },
    disabled: {
      type: 'boolean',
      defaultValue: false
    }
  },
  decorators: [
    Story => (
      <Box
        css={{
          display: 'grid',
          placeItems: 'center'
        }}
      >
        {Story()}
      </Box>
    )
  ]
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary'
  }
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary'
  }
};

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger'
  }
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: ['Next Step', <ArrowRight key='a' weight='bold' />]
  }
};
