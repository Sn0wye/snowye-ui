import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
  size: number;
  currentStep?: number;
  label?: string;
}

export const MultiStep = ({ size, currentStep = 1, label }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      {label ? <Label>{label}</Label> : null}

      <Steps
        css={{
          '--steps-size': size
        }}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map(step => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  );
};

MultiStep.displayName = 'MultiStep';
