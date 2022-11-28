/** @jsxImportSource react */
import { Box } from '@snowye-ui/react';

interface Props {
  css?: any;
  children?: React.ReactNode;
}

export const HeroContainer = ({ css, children }: Props) => {
  return (
    <Box
      data-algolia-exclude
      // In case any semantic content sneaks through in a hero, let's hide it
      // from the a11y tree since this is a presentational component.
      role='presentation'
      css={{
        backgroundColor: 'var(--theme-code-bg)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '100px 0',
        borderTopLeftRadius: '$md',
        borderTopRightRadius: '$md',
        border: 0,
        marginTop: '$2',
        ...(css as any)
      }}
    >
      {children}
    </Box>
  );
};
