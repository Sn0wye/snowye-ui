# TextInput
A component to get user input inside a text field.

## Anatomy

Mount all pieces together and create your input

```tsx
import { TextInput } from '@snowye-ui/react'

<TextInput.Root>
  <TextInput.LeftIcon>
    // Your icon
  </TextInput.LeftIcon>,
  <TextInput.Input placeholder='Type some text...' />
  <TextInput.RightIcon
    activeIcon={/* Icon when text is visible */}
    inactiveIcon={/* Icon when text not visible */}
  />
</TextInput.Root>
```

## Example
<TextInput />

## API Reference

### Root
Contains all parts of the TextInput.

| **Prop**      | **Type**  | **Default** |
|---------------|-----------|-------------|
| `children`    | ReactNode |             |
| `error`       | boolean   | false       |  
| `disabled`    | boolean   | false       |  

### RightIcon
Contains all parts of the TextInput.

| **Prop**        | **Type**  | **Default** |
|-----------------|-----------|-------------|
| `activeIcon`    | ReactNode |             |
| `inactiveIcon`  | ReactNode |             |  