import * as Avatar from '@radix-ui/react-avatar';

import { styled } from '../../styles';

export const Container = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden'
});

export const Image = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit'
});

export const Fallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray600',
  color: '$gray100',
  fontWeight: '$medium',
  fontFamily: '$default',

  svg: {
    width: '$6',
    height: '$6'
  }
});
