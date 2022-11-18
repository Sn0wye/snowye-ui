import { ComponentProps } from 'react';

import { Container, Fallback, Image } from './styles';

interface AvatarRootProps extends ComponentProps<typeof Image> {}

const AvatarRoot = ({ children, ...props }: AvatarRootProps) => {
  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} />

      {children}
    </Container>
  );
};

AvatarRoot.displayName = 'Avatar';

/* ----------------------------------------------------------------------------------------------- */

interface AvatarFallbackProps extends ComponentProps<typeof Fallback> {}

const AvatarFallback = ({ children, ...props }: AvatarFallbackProps) => {
  return <Fallback {...props}>{children}</Fallback>;
};

AvatarFallback.displayName = 'Avatar.Fallback';

/* ----------------------------------------------------------------------------------------------- */

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback
});

export type { AvatarRootProps, AvatarFallbackProps };
