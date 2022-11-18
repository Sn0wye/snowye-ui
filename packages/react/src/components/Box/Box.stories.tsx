import { Box, BoxProps } from '@snowye-ui/react';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<BoxProps>;

export const Primary: Story<BoxProps> = () => (
  <Box
    css={{
      width: '20rem',
      height: '20rem',
      backgroundColor: '$gray700',
      '&:hover': {
        backgroundColor: '$gray600'
      }
    }}
  />
);
