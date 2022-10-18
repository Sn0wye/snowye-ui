import { ComponentProps, ElementType } from 'react';

import { Loading } from '../Loading';
import { IconButtonContainer } from './styles';

export interface IconButtonProps
  extends ComponentProps<typeof IconButtonContainer> {
  as?: ElementType;
  loading?: boolean;
}

export const IconButton = ({
  children,
  loading = false,
  ...props
}: IconButtonProps) => {
  const content = loading ? (
    <Loading
      weight='bold'
      css={{
        color: '$white'
      }}
      size='sm'
    />
  ) : (
    children
  );

  return <IconButtonContainer {...props}>{content}</IconButtonContainer>;
};

IconButton.displayName = 'IconButton';
