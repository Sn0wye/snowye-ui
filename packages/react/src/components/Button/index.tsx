import { ComponentProps, ElementType } from 'react';

import { Loading } from '../Loading';
import { ButtonContainer } from './styles';

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType;
  loading?: boolean;
}

export const Button = ({
  children,
  loading = false,
  variant,
  ...props
}: ButtonProps) => {
  const loadingColor = variant === 'danger' ? '$red500' : '$white';
  const content = loading ? (
    <Loading
      weight='bold'
      css={{
        color: loadingColor
      }}
    />
  ) : (
    children
  );
  return (
    <ButtonContainer variant={variant} {...props}>
      {content}
    </ButtonContainer>
  );
};

Button.displayName = 'Button';
