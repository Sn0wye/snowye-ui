import { ComponentProps, ElementType } from 'react';

import { styled } from '../../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '50%'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$purple500',

        '&:not(:disabled):hover': {
          background: '$purple300'
        }
      },
      secondary: {
        color: '$purple300',
        border: '2px solid $purple500',

        '&:not(:disabled):hover': {
          background: '$purple500',
          color: '$white'
        }
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$gray700'
        }
      },
      danger: {
        background: '$gray700',
        color: '$red500',

        '&:not(:disabled):hover': {
          background: '$gray600'
        }
      }
    },

    size: {
      sm: {
        height: '$8',
        padding: '0 $4',
        fontSize: '$xs'
      },
      md: {
        height: '$10',
        padding: '0 $6'
      },
      lg: {
        height: '$12',
        padding: '0 $8'
      }
    },

    full: {
      true: {
        width: '100%'
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

Button.displayName = 'Button';

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
