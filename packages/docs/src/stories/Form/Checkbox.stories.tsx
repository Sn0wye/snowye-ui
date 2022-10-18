import { Box, Checkbox, CheckboxProps, Text } from '@snowye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    Story => (
      <Box
        as='label'
        css={{
          display: 'flex',
          gap: '$2'
        }}
      >
        {Story()}
        <Text size='sm'>I accept the terms.</Text>
      </Box>
    )
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true
  }
};
