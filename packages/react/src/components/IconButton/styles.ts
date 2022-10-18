import { styled } from '../../styles';

export const IconButtonContainer = styled('button', {
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
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  border: '1px solid transparent',

  svg: {
    width: '$5',
    height: '$5'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '50%'
  },

  variants: {
    variant: {
      primary: {
        svg: {
          color: '$white'
        },
        backgroundColor: '$purple500',

        '&:not(:disabled):hover': {
          background: '$purple300'
        }
      },
      secondary: {
        svg: {
          color: '$gray100'
        },
        background: '$gray700',

        '&:not(:disabled):hover': {
          background: '$gray600'
        }
      },
      tertiary: {
        svg: {
          color: '$gray100'
        },

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$gray700'
        }
      }
    },

    size: {
      sm: {
        height: '$8',
        width: '$8'
      },
      md: {
        height: '$10',
        width: '$10'
      },
      lg: {
        height: '$12',
        width: '$12'
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});
