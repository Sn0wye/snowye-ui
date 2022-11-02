import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ComponentProps, ReactNode } from 'react';

import { StyledArrow, StyledContent } from './styles';

interface ContentProps extends ComponentProps<typeof StyledContent> {
  children: ReactNode;
}

const Portal = TooltipPrimitive.Portal;
const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger;

const Content = ({ children, ...props }: ContentProps) => {
  return (
    <Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </Portal>
  );
};

// Your app...
// const IconButton = styled('button', {
//   all: 'unset',
//   fontFamily: 'inherit',
//   borderRadius: '100%',
//   height: 35,
//   width: 35,
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: '#5746af',
//   backgroundColor: 'white',
//   boxShadow: `0 2px 10px rgba(0, 0, 0, 0.7)`,
//   '&:hover': { backgroundColor: '#f5f2ff' },
//   '&:focus': { boxShadow: `0 0 0 2px black` }
// });

export interface TooltipProps {
  children: ReactNode;
}

export const Tooltip = ({ children }: TooltipProps) => {
  return (
    <Provider>
      <Root>
        <Trigger asChild>
          {/* <IconButton>
            <Plus />
          </IconButton> */}
          {children}
        </Trigger>
        <Content sideOffset={5}>Add to library</Content>
      </Root>
    </Provider>
  );
};
