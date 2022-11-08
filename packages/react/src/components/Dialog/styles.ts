import * as DialogPrimitive from '@radix-ui/react-dialog';

import { keyframes, styled } from '../../styles';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  zIndex: 200,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  width: '100vw',
  height: '100vh',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
});

export const StyledContent = styled(DialogPrimitive.Content, {
  zIndex: 300,
  fontFamily: '$default',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '$6',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' }
});

export const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: '$semibold',
  color: '$gray100',
  fontSize: '$2xl',
  lineHeight: '$shorter',

  '& + &': {
    marginTop: '$5'
  }
});

export const StyledDescription = styled(DialogPrimitive.Description, {
  marginTop: '$3 !important',
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',
  fontSize: '$md'
});

export const StyledCloseButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '$xs',
  height: '$6',
  width: '$6',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$purple500',
  position: 'absolute',
  top: 15,
  right: 15,
  cursor: 'pointer',

  svg: {
    height: '$4',
    width: '$4'
  },

  '&:hover': { backgroundColor: '$gray700' },
  '&:focus': { boxShadow: `0 0 0 2px #8257e6` }
});
