import * as PopoverPrimitive from '@radix-ui/react-popover';

import { styled } from '../../styles';

export const StyledContent = styled(PopoverPrimitive.Content, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
  width: '22.5rem',
  position: 'relative',
  '&:focus': {
    outline: 'none'
  }
});

export const Close = styled(PopoverPrimitive.Close, {
  color: '$gray200',
  height: '$5',
  width: '$5',
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
    transition: 'color 0.2s ease-out'
  }
});

export const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: '$gray800'
});
