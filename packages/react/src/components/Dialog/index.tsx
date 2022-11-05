import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ComponentProps, ReactNode, useState } from 'react';

import {
  StyledCloseButton,
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle
} from './styles';

interface DialogRootProps extends ComponentProps<typeof DialogPrimitive.Root> {
  children?: ReactNode;
}

const DialogRoot = ({ children, ...props }: DialogRootProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen} {...props}>
      {children}
    </DialogPrimitive.Root>
  );
};

DialogRoot.displayName = 'Dialog.Root';

/* ----------------------------------------------------------------------------------------------- */

interface DialogTriggerProps {
  children?: ReactNode;
}

const DialogTrigger = ({ children }: DialogTriggerProps) => {
  return <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>;
};

DialogTrigger.displayName = 'Dialog.Trigger';

/* ----------------------------------------------------------------------------------------------- */

interface DialogContentProps extends ComponentProps<typeof StyledContent> {
  children?: ReactNode;
}

const DialogContent = ({ children, ...props }: DialogContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>
        <DialogPrimitive.Close asChild>
          <StyledCloseButton aria-label='Close'>
            <X />
          </StyledCloseButton>
        </DialogPrimitive.Close>

        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  );
};

DialogContent.displayName = 'Dialog.Content';

/* ----------------------------------------------------------------------------------------------- */

interface DialogTitleProps {
  children?: ReactNode;
}

const DialogTitle = ({ children }: DialogTitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};

DialogTitle.displayName = 'Dialog.Title';

/* ----------------------------------------------------------------------------------------------- */

interface DialogDescriptionProps {
  children?: ReactNode;
}

const DialogDescription = ({ children }: DialogDescriptionProps) => {
  return <StyledDescription>{children}</StyledDescription>;
};

DialogDescription.displayName = 'Dialog.Description';

/* ----------------------------------------------------------------------------------------------- */

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription
};

export type {
  DialogRootProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps
};
