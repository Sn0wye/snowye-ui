import { Surface, SurfaceProps, Text } from '@snowye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Layout/Surface',
  component: Surface,
  args: {
    children: <Text>This is a Surface component</Text>
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<SurfaceProps>;

export const Primary: StoryObj<SurfaceProps> = {};
