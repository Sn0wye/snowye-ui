/* eslint-disable react/jsx-key */
import { Button, ButtonProps } from '@snowye-ui/react';
import type { Meta, Story, StoryObj } from '@storybook/react';
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'LABEL',
    variant: 'primary',
    size: 'md'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger'],
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
    full: {
      type: 'boolean',
      defaultValue: false
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

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
};

export const Full: StoryObj<ButtonProps> = {
  args: {
    full: true
  }
};

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true
  }
};

export const WithIcon: Story<ButtonProps> = () => (
  <Button>
    Next Step
    <Button.RightIcon
      css={{
        transition: 'transform 0.3s ease',

        '&[data-hover="true"]': {
          transform: 'translateX(5px)'
        }
      }}
    >
      <ArrowRight weight='bold' />
    </Button.RightIcon>
  </Button>
);

export const AsAnchor: Story<ButtonProps> = () => (
  <Button as='a'>I&apos;m an anchor!</Button>
);
