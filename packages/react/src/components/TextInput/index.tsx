import {
  ComponentProps,
  createContext,
  Dispatch,
  forwardRef,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import {
  StyledInput,
  StyledLeftIcon,
  StyledPrefix,
  StyledRightIcon,
  TextInputContainer
} from './styles';

interface TextInputContextType {
  isTextVisible: boolean;
  toggleVisibility: () => void;
  setTextVisibility: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
}

const TextInputContext = createContext({} as TextInputContextType);

/* ----------------------------------------------------------------------------------------------- */

interface TextInputRootProps {
  children?: ReactNode;
  error?: boolean;
  disabled?: boolean;
}

const TextInputRoot = ({
  children,
  error,
  disabled = false
}: TextInputRootProps) => {
  const [isTextVisible, setTextVisibility] = useState(true);

  const toggleVisibility = useCallback(() => {
    setTextVisibility(state => !state);
  }, []);

  // const toggleVisibilityIcon = isTextVisible ? (
  //   <EyeSlash weight='bold' />
  // ) : (
  //   <Eye weight='bold' />
  // );

  return (
    <TextInputContext.Provider
      value={{ isTextVisible, toggleVisibility, setTextVisibility, disabled }}
    >
      <TextInputContainer error={error}>{children}</TextInputContainer>
    </TextInputContext.Provider>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

/* ----------------------------------------------------------------------------------------------- */

interface TextInputLeftIconProps {
  children?: ReactNode;
}

const TextInputLeftIcon = ({ children }: TextInputLeftIconProps) => {
  return <StyledLeftIcon>{children}</StyledLeftIcon>;
};

TextInputLeftIcon.displayName = 'TextInput.LeftIcon';

/* ----------------------------------------------------------------------------------------------- */

interface TextInputPrefixProps {
  children?: string;
}

const TextInputPrefix = ({ children }: TextInputPrefixProps) => {
  return <StyledPrefix>{children}</StyledPrefix>;
};

TextInputPrefix.displayName = 'TextInput.Prefix';

/* ----------------------------------------------------------------------------------------------- */

interface TextInputProps extends ComponentProps<typeof StyledInput> {}

const TextInputInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type, ...props }, ref) => {
    const { isTextVisible, setTextVisibility, disabled } =
      useContext(TextInputContext);

    useEffect(() => {
      if (type === 'password') {
        setTextVisibility(false);
      }
    }, [type, setTextVisibility]);

    const inputType = isTextVisible ? 'text' : 'password';

    return (
      <StyledInput type={inputType} disabled={disabled} ref={ref} {...props} />
    );
  }
);

TextInputInput.displayName = 'TextInput.Input';

/* ----------------------------------------------------------------------------------------------- */

interface TextInputRightIconProps {
  activeIcon?: ReactNode;
  inactiveIcon?: ReactNode;
}

const TextInputRightIcon = ({
  activeIcon,
  inactiveIcon
}: TextInputRightIconProps) => {
  const { isTextVisible, toggleVisibility } = useContext(TextInputContext);

  // This makes no sense, but when the text is visible, the inactiveIcon is shown to hide the text
  const icon = isTextVisible ? inactiveIcon : activeIcon;

  return <StyledRightIcon onClick={toggleVisibility}>{icon}</StyledRightIcon>;
};

TextInputRightIcon.displayName = 'TextInput.RightIcon';

/* ----------------------------------------------------------------------------------------------- */

export const TextInput = {
  Root: TextInputRoot,
  LeftIcon: TextInputLeftIcon,
  Prefix: TextInputPrefix,
  Input: TextInputInput,
  RightIcon: TextInputRightIcon
};
export type {
  TextInputRootProps,
  TextInputLeftIconProps,
  TextInputPrefixProps,
  TextInputProps,
  TextInputRightIconProps
};
