import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ReactNode, useState } from 'react';

import { StyledArrow, StyledContent } from './styles';

const Portal = TooltipPrimitive.Portal;
const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger;

export interface TooltipProps extends TooltipPrimitive.TooltipProviderProps {
  content: string;
  children: ReactNode;
}

export const Tooltip = ({ children, content, ...props }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Provider {...props}>
      <Root open={isOpen} onOpenChange={setIsOpen}>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <StyledContent sideOffset={5}>
            <StyledArrow />
            {content}
          </StyledContent>
        </Portal>
      </Root>
    </Provider>
  );
};

Tooltip.displayName = 'Tooltip';
