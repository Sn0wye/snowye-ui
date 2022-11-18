import { Loading, LoadingProps, Surface } from '@snowye-ui/react';
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
      <Surface
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {Story()}
      </Surface>
    )
  ]
} as Meta<LoadingProps>;

export const Primary: StoryObj<LoadingProps> = {};
