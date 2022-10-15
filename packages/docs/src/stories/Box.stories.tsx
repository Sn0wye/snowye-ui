import { Box, BoxProps } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Teste</span>
      </>
    )
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
