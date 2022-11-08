import {
  ComponentProps,
  createContext,
  Dispatch,
  ElementType,
  forwardRef,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';

import { Loading } from '../Loading';
import { ButtonContainer, StyledLeftIcon, StyledRightIcon } from './styles';

interface ButtonContextType {
  isHovered: boolean;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
}

const ButtonContext = createContext({} as ButtonContextType);

interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType;
  loading?: boolean;
}

const ButtonRoot = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading = false, variant, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const content = loading ? <Loading weight='bold' /> : children;

    return (
      <ButtonContext.Provider
        value={{
          isHovered,
          setIsHovered
        }}
      >
        <ButtonContainer
          ref={ref}
          variant={variant}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-hover={isHovered}
          {...props}
        >
          {content}
        </ButtonContainer>
      </ButtonContext.Provider>
    );
  }
);

ButtonRoot.displayName = 'Button';

/* ----------------------------------------------------------------------------------------------- */

interface ButtonLeftIconProps extends ComponentProps<typeof StyledLeftIcon> {
  children?: ReactNode;
}
const ButtonLeftIcon = ({ children, ...props }: ButtonLeftIconProps) => {
  const { isHovered } = useContext(ButtonContext);

  return (
    <StyledLeftIcon data-hover={isHovered} {...props}>
      {children}
    </StyledLeftIcon>
  );
};

ButtonLeftIcon.displayName = 'Button.LeftIcon';

/* ----------------------------------------------------------------------------------------------- */

interface ButtonRightIconProps extends ComponentProps<typeof StyledRightIcon> {
  children?: ReactNode;
}
const ButtonRightIcon = ({ children, ...props }: ButtonRightIconProps) => {
  const { isHovered } = useContext(ButtonContext);

  return (
    <StyledRightIcon data-hover={isHovered} {...props}>
      {children}
    </StyledRightIcon>
  );
};

ButtonRightIcon.displayName = 'Button.RightIcon';

/* ----------------------------------------------------------------------------------------------- */

export const Button = Object.assign(ButtonRoot, {
  LeftIcon: ButtonLeftIcon,
  RightIcon: ButtonRightIcon
});

export type { ButtonProps, ButtonLeftIconProps, ButtonRightIconProps };
