import type { ComponentProps, ElementType } from 'react';

import { CSS, styled } from '../../styles';

export const Box = styled('div', {
  boxSizing: 'border-box'
});

Box.displayName = 'Box';

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
  css?: CSS;
}
