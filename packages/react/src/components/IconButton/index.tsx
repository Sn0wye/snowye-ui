import { ComponentProps, ElementType, forwardRef } from 'react';

import { Loading } from '../Loading';
import { IconButtonContainer } from './styles';

export interface IconButtonProps
  extends ComponentProps<typeof IconButtonContainer> {
  as?: ElementType;
  loading?: boolean;
}

export const IconButton = forwardRef<
  ElementType<typeof IconButtonContainer>,
  IconButtonProps
>(({ children, loading = false, ...props }, forwardedRef) => {
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

  return (
    <IconButtonContainer ref={forwardedRef} {...props}>
      {content}
    </IconButtonContainer>
  );
});

IconButton.displayName = 'IconButton';
