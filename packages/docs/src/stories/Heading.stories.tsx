import { Heading, HeadingProps } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title'
  }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default heading behavior is `h2`, but we can change this by passing the desired tag to `as` prop'
      }
    }
  }
};
