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

export const Default: StoryObj<MultiStepProps> = {
  args: {
    label: 'Step 1 of 4'
  }
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    label: 'Step 4 of 4'
  }
};

export const WithoutLabel: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2
  }
};
