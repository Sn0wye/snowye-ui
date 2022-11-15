/** @jsxImportSource react */
import { IconButton, Popover, Text } from '@snowye-ui/react';
import { Info } from 'phosphor-react';
import { styled } from '../../styles/stitches';
import { DividerHorizontalIcon } from './DividerHorizontal';
import { RegionTable } from './RegionTable';

const Box = styled('div', {
  boxSizing: 'border-box'
});

const Td = styled('td', {
  py: '$3',
  pr: '$4',
  whiteSpace: 'nowrap',
  height: 56,
  verticalAlign: 'center',
  boxSizing: 'border-box'

  // '&:not(:first-child, :nth-child(2), :nth-child(3))': {
  //   borderTop: '1px solid $gray600'
  // }
});

export const Code = styled('code', {
  fontFamily: 'Fira Code',
  fontSize: '$md',
  whiteSpace: 'nowrap',
  padding: '0 3px 2px 3px',
  borderRadius: 0,
  margin: 0,
  height: '$6',

  variants: {
    variant: {
      gray: {
        backgroundColor: '$gray800',
        color: '$gray400'
      },
      violet: {
        backgroundColor: '#251e40',
        color: '#9e8cfc'
      }
    }
  },
  defaultVariants: {
    variant: 'violet'
  }
});

type Data = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type: string;
  typeSimple: string;
  description?: string;
};

interface Props {
  data: Data[];
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export const PropsTable = ({
  data,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy
}: Props) => {
  const hasAriaLabel = !!(ariaLabel || ariaLabelledBy);
  return (
    <RegionTable
      css={{
        width: '100%',
        textAlign: 'left',
        borderCollapse: 'collapse',
        whiteSpace: 'nowrap',
        boxShadow: 'border-box'
      }}
      aria-label={hasAriaLabel ? ariaLabel : 'Component Props'}
      aria-labelledby={ariaLabelledBy}
    >
      <thead>
        <tr>
          <Box
            as='th'
            css={{
              borderBottom: '1px solid $gray600',
              py: '$3',
              pr: '$4',
              width: '45%'
            }}
          >
            <Text size='sm' css={{ color: '$gray200' }}>
              Prop
            </Text>
          </Box>
          <Box
            as='th'
            css={{
              borderBottom: '1px solid $gray600',
              py: '$3',
              pr: '$4',
              width: '27.5%'
            }}
          >
            <Text size='sm' css={{ color: '$gray200' }}>
              Type
            </Text>
          </Box>
          <Box
            as='th'
            css={{
              borderBottom: '1px solid $gray600',
              py: '$3',
              pr: '$4',
              width: '27.5%'
            }}
          >
            <Text size='sm' css={{ color: '$gray200' }}>
              Default
            </Text>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (
            {
              name,
              type,
              typeSimple,
              required,
              default: defaultValue,
              description
            },
            i
          ) => (
            <tr key={`${name}-${i}`}>
              <Td
                css={{
                  // display: 'flex'
                  borderBottom: '1px solid $gray600',
                  whiteSpace: 'nowrap'
                }}
              >
                <Code>
                  {name}
                  {required ? '*' : null}
                </Code>
                {description && (
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <IconButton
                        size='xs'
                        variant='tertiary'
                        css={{
                          ml: '$2',
                          color: '$gray200'
                        }}
                      >
                        {/* <AccessibleIcon label='Prop description'> */}
                        <Info size={16} />
                        {/* </AccessibleIcon> */}
                      </IconButton>
                    </Popover.Trigger>
                    <Popover.Content
                      css={{ maxWidth: 'max-content', py: '$2', px: '$3' }}
                      hideClose
                      side='top'
                      onOpenAutoFocus={event => {
                        event.preventDefault();
                        (event.currentTarget as HTMLElement)?.focus();
                      }}
                    >
                      <Text size='md' css={{ lineHeight: '20px' }}>
                        {description}
                      </Text>
                    </Popover.Content>
                  </Popover.Root>
                )}
              </Td>
              <Td
                css={{
                  borderBottom: '1px solid $gray600'
                }}
              >
                <Code
                  css={{ borderColor: '$gray700', color: '$gray200' }}
                  variant='gray'
                >
                  {Boolean(typeSimple) ? typeSimple : type}
                </Code>
                {Boolean(typeSimple) && (
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <IconButton
                        size='xs'
                        variant='tertiary'
                        css={{
                          color: '$gray200'
                        }}
                      >
                        {/* <AccessibleIcon label='See full type'> */}
                        <Info size={16} />
                        {/* </AccessibleIcon> */}
                      </IconButton>
                    </Popover.Trigger>
                    <Popover.Content
                      side='top'
                      css={{ maxWidth: 'max-content', py: '$2', px: '$3' }}
                      hideClose
                    >
                      <Code>{type}</Code>
                    </Popover.Content>
                  </Popover.Root>
                )}
              </Td>
              <Td
                css={{
                  borderBottom: '1px solid $gray600'
                }}
              >
                {Boolean(defaultValue) ? (
                  <Code
                    css={{ bc: '$gray700', color: '$gray200' }}
                    variant='gray'
                  >
                    {defaultValue}
                  </Code>
                ) : (
                  // <Box
                  //   as={AccessibleIcon}
                  //   // label='No default value'
                  //   css={{ color: '$gray500' }}
                  // >
                  <DividerHorizontalIcon />
                  // </Box>
                )}
              </Td>
            </tr>
          )
        )}
      </tbody>
    </RegionTable>
  );
};