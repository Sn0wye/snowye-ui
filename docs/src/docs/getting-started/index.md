# Getting Started

A quick tutorial on how to get up and running with Snowye UI

## Implementing a simple Button

### 1. Install Snowye UI
Install the Snowye UI from your command line

#### npm
```sh
npm install @snowye-ui/react
```

#### yarn
```sh
yarn add @snowye-ui/react
```

#### pnpm
```sh
pnpm i @snowye-ui/react
```

### 2. Use it

```tsx
import { Button } from '@snowye-ui/react'
const Page = () => {
  return <Button>I'm a button!</Button>;
};
```

### Result
<Button />

## Props
The props will be shown as the example that follows
Notice that in this example, the interface is extending ComponentProps of ButtonContainer, which is a button, and can receive all props that a radix-ui button can.

```tsx
interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType; // Default: 'button';
  loading?: boolean; // Default: false;
}
```
