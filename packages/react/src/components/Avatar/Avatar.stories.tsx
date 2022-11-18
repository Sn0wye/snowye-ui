import { Avatar, AvatarRootProps, Box } from '@snowye-ui/react';
import type { Meta, Story, StoryObj } from '@storybook/react';
import { User } from 'phosphor-react';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Sn0wye.png',
    alt: 'Gabriel Trzimajewski'
  },
  decorators: [Story => <Box>{Story()}</Box>]
} as Meta<AvatarRootProps>;

export const Primary: StoryObj<AvatarRootProps> = {};

export const WithFallback: Story<AvatarRootProps> = () => (
  <Avatar>
    <Avatar.Fallback>GT</Avatar.Fallback>
  </Avatar>
);

export const WithFallbackIcon: Story<AvatarRootProps> = () => (
  <Avatar>
    <Avatar.Fallback>
      <User color='#fff' />
    </Avatar.Fallback>
  </Avatar>
);
