import { MultiStep, MultiStepProps, Surface } from '@snowye-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1
  },
  decorators: [
    Story => (
      <Surface
        css={{
          width: '50%'
        }}
      >
        {Story()}
      </Surface>
    )
  ]
} as Meta<MultiStepProps>;

export const Default: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4
  }
};
