import { ComponentProps } from 'react';

import { styled } from '../../styles';

export const TextArea = styled('textarea', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  display: 'flex',
  alignItems: 'center',
  maxWidth: 300,
  height: '$12',
  transition: 'all 0.2s ease 0s',

  '&:focus': {
    outline: 0,
    borderColor: '$purple300'
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  '&:placeholder)': {
    color: '$gray400'
  },

  variants: {
    error: {
      true: {
        borderColor: '$red500'
      }
    }
  }
});

TextArea.displayName = 'TextArea';

export type TextAreaProps = ComponentProps<typeof TextArea>;
