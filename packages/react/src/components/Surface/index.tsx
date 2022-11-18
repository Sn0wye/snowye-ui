import type { ComponentProps, ElementType } from 'react';

import { CSS, styled } from '../../styles';

export const Surface = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600'
});

Surface.displayName = 'Surface';

export interface SurfaceProps extends ComponentProps<typeof Surface> {
  as?: ElementType;
  css?: CSS;
}
