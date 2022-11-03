import * as ToastPrimitive from '@radix-ui/react-toast';

import { keyframes, styled } from '../../styles';

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 32px))` },
  to: { transform: 'translateX(0)' }
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 32px))` }
});

export const Viewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$8',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 99999,
  outline: 'none'
});

export const Root = styled(ToastPrimitive.Root, {
  background: '$gray800',
  borderRadius: '$sm',
  // boxShadow:
  //   'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
  width: '22.5rem',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out'
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    }
  }
});

export const Title = styled(ToastPrimitive.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white'
});
export const Description = styled(ToastPrimitive.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200'
});
export const Close = styled(ToastPrimitive.Close, {
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
