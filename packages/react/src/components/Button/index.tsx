import { ComponentProps, ElementType } from 'react';

import { styled } from '../../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  padding: '0 $4',
  transition: 'all 0.2s ease-in-out',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green500',

        '&:not(:disabled):hover': {
          background: '$green300'
        },

        '&:disabled': {
          background: '$gray200'
        }
      },
      secondary: {
        color: '$green300',
        border: '2px solid $green500',

        '&:not(:disabled):hover': {
          background: '$green500',
          color: '$white'
        },

        '&:disabled': {
          background: '$gray200',
          color: '$gray200',
          borderColor: '$gray200'
        }
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$gray700'
        },

        '&:disabled': {
          color: '$gray600'
        }
      },
      danger: {
        background: '$gray700',
        color: '$red500',

        '&:not(:disabled):hover': {
          background: '$gray600'
        },

        '&:disabled': {
          opacity: '50%'
        }
      }
    },

    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
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

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
