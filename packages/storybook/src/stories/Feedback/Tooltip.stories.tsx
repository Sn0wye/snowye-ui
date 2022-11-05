import { Box, Text, Tooltip, TooltipProps } from '@snowye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    content: 'Hello, World!',
    children: (
      <Box>
        <Text>Hover me</Text>
      </Box>
    )
  }
} as Meta<TooltipProps>;

export const Default: StoryObj<TooltipProps> = {};
