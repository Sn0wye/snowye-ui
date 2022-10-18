import { TextArea, TextAreaProps } from '@snowye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Placeholder'
  },
  argTypes: {
    disabled: {
      type: 'boolean',
      defaultValue: false
    },
    error: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as Meta;

export const Default: StoryObj<TextAreaProps> = {};

export const WithError: StoryObj<TextAreaProps> = {
  args: {
    error: true
  }
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
};
