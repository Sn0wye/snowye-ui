/** @jsxImportSource react */
import { BoxProps } from '@snowye-ui/react';
import { styled } from '../../styles/stitches';

const Box = styled('div', {
  boxSizing: 'border-box'
});

export const RegionTable = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: BoxProps) => {
  return (
    <Box
      as='div'
      role='region'
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      tabIndex={0}
      css={{
        position: 'relative',
        overflow: 'auto',
        border: 0,
        margin: 0,
        padding: 0,
        borderRadius: 0,
        '&:focus': {
          outline: 0
        }
      }}
    >
      <Box as='table' {...props} />
    </Box>
  );
};
