import { Slot } from '@radix-ui/react-slot';

import { styled } from '../../styles';

export const TextInputContainer = styled('div', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',
  maxWidth: 300,
  height: '$12',
  transition: 'all 0.2s ease 0s',

  '&:has(input:focus)': {
    borderColor: '$purple300',

    svg: {
      color: '$purple300'
    }
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  svg: {
    width: '$6',
    height: '$6',
    color: '$gray400'
  },

  variants: {
    error: {
      true: {
        borderColor: '$red500',

        svg: {
          color: '$red500'
        }
      }
    }
  }
});

export const StyledInput = styled('input', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  '&:placeholder': {
    color: '$gray400'
  }
});

export const StyledPrefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$gray400',
  fontWeight: '$regular'
});

export const StyledLeftIcon = styled(Slot, {
  marginRight: '$4'
});

export const StyledRightIcon = styled(Slot, {
  marginLeft: '$4',
  cursor: 'pointer'
});
