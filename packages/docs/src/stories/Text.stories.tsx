import { Text, TextProps } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis ea officia. Tempore neque vero provident eius officia id necessitatibus.'
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'StrongText',
    as: 'strong'
  }
};
