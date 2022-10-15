import { Avatar, AvatarProps } from '@sn0wye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Sn0wye.png',
    alt: 'Gabriel Trzimajewski'
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};
