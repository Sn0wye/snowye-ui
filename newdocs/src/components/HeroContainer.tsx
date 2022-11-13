/** @jsxImportSource react */
import { Box } from '@snowye-ui/react';
import { FunctionComponent } from 'react';

interface Props {
  css?: any;
  children?: React.ReactNode;
}

const HeroContainer: FunctionComponent = ({ css, children }: Props) => {
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
        ...(css as any),

        '@bp3': { mx: '-$7' },
        '@bp4': { mx: '-$8' }
      }}
    >
      {children}
    </Box>
  );
};

export default HeroContainer;
