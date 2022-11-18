/** @jsxImportSource react */
import { Avatar, Box } from '@snowye-ui/react';

const AvatarDemo = () => {
  return (
    <Box
      css={{
        display: 'flex',
        gap: 20
      }}
    >
      <Avatar src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'>
        <Avatar.Fallback></Avatar.Fallback>
      </Avatar>
      <Avatar src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'>
        <Avatar.Fallback></Avatar.Fallback>
      </Avatar>
      <Avatar src={undefined}>
        <Avatar.Fallback>GT</Avatar.Fallback>
      </Avatar>
    </Box>
  );
};

export default AvatarDemo;
