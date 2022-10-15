import { Box, BoxProps, Text } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>This is a box component</Text>
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
