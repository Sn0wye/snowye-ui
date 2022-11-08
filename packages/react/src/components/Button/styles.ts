import { Slot } from '@radix-ui/react-slot';

import { styled } from '../../styles';

export const ButtonContainer = styled('button', {
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
        color: '$gray100',
        background: '$gray700',

        '&:not(:disabled):hover': {
          background: '$gray600'
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

export const StyledLeftIcon = styled(Slot, {});
export const StyledRightIcon = styled(Slot, {
  marginLeft: 'auto'
});
