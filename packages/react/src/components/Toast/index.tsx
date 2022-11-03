import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'phosphor-react';
import { SetStateAction } from 'react';

import { Close, Description, Root, Title, Viewport } from './styles';

const Provider = ToastPrimitive.Provider;

export interface ToastProps extends ToastPrimitive.ToastProps {
  isOpen?: boolean;
  setIsOpen?: (state: boolean) => void | SetStateAction<boolean>;
  title?: string;
  content?: string;
}

export const Toast = ({
  isOpen,
  setIsOpen,
  title,
  content,
  ...props
}: ToastProps) => {
  return (
    <Provider swipeDirection='right'>
      <Root open={isOpen} onOpenChange={setIsOpen} {...props}>
        <Title>{title}</Title>
        <Description>{content}</Description>
        <Close asChild>
          <X />
        </Close>
      </Root>

      <Viewport />
    </Provider>
  );
};

Toast.displayName = 'Toast';
