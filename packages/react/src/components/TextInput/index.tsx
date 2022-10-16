import { Eye, EyeSlash } from 'phosphor-react';
import {
  ComponentProps,
  HTMLInputTypeAttribute,
  ReactNode,
  useCallback,
  useState
} from 'react';

import {
  Input,
  LeftIcon,
  Prefix,
  TextInputContainer,
  ToggleVisibilityIcon
} from './styles';

export interface TextInputRootProps extends ComponentProps<typeof Input> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  prefix?: string;
  error?: boolean;
  type?: HTMLInputTypeAttribute;
}

export const TextInput = ({
  children,
  leftIcon,
  prefix,
  error,
  type,
  ...props
}: TextInputRootProps) => {
  const [isTextVisible, setIsTextVisible] = useState(type !== 'password');

  const toggleVisibility = useCallback(() => {
    setIsTextVisible(state => !state);
  }, []);

  const inputType = isTextVisible ? 'text' : 'password';

  const toggleVisibilityIcon = isTextVisible ? (
    <EyeSlash weight='bold' />
  ) : (
    <Eye weight='bold' />
  );

  return (
    <TextInputContainer error={error}>
      {!!leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input type={inputType} {...props} />
      {type === 'password' && (
        <ToggleVisibilityIcon onClick={toggleVisibility}>
          {toggleVisibilityIcon}
        </ToggleVisibilityIcon>
      )}
    </TextInputContainer>
  );
};
