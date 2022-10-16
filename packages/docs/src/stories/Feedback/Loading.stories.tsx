import { Box, Loading, LoadingProps } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Feedback/Loading',
  component: Loading,
  args: {
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      }
    }
  },
  decorators: [
    Story => (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {Story()}
      </Box>
    )
  ]
} as Meta<LoadingProps>;

export const Primary: StoryObj<LoadingProps> = {};
