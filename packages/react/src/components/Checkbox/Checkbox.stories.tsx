import { Checkbox, CheckboxProps, Surface, Text } from '@snowye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    Story => (
      <Surface
        as='label'
        css={{
          display: 'flex',
          gap: '$2'
        }}
      >
        {Story()}
        <Text size='sm'>I accept the terms.</Text>
      </Surface>
    )
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true
  }
};
