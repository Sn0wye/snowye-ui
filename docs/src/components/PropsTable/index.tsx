/** @jsxImportSource react */
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { Box, IconButton, Popover, Text } from '@snowye-ui/react';
import { Info } from 'phosphor-react';
import { styled } from '../../styles/stitches';
import { DividerHorizontalIcon } from './DividerHorizontal';
import { RegionTable } from './RegionTable';

const Td = styled('td', {
  boxSizing: 'border-box',
  py: '$3',
  pr: '$4',
  whiteSpace: 'nowrap',
  height: 56
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
  typeSimple?: string;
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
        whiteSpace: 'nowrap'
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
            <Text
              size='sm'
              css={{ color: '$gray200', fontFamily: 'Untitled Sans' }}
            >
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
            <Text
              size='sm'
              css={{ color: '$gray200', fontFamily: 'Untitled Sans' }}
            >
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
            <Text
              size='sm'
              css={{ color: '$gray200', fontFamily: 'Untitled Sans' }}
            >
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
                  borderBottom: '1px solid $gray600',
                  whiteSpace: 'nowrap'
                }}
              >
                <Code
                  css={{
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                >
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
                          display: 'inline-flex',
                          verticalAlign: 'middle',
                          bottom: 0,
                          ml: '$1',
                          color: '$gray200'
                        }}
                      >
                        <AccessibleIcon.Root label='Prop description'>
                          <Info size={16} />
                        </AccessibleIcon.Root>
                      </IconButton>
                    </Popover.Trigger>
                    <Popover.Content
                      css={{
                        maxWidth: 'max-content',
                        py: '$2',
                        px: '$3',
                        fontFamily: 'Untitled Sans !important'
                      }}
                      hideClose
                      side='top'
                      onOpenAutoFocus={event => {
                        event.preventDefault();
                        (event.currentTarget as HTMLElement)?.focus();
                      }}
                    >
                      <Text
                        size='md'
                        css={{
                          lineHeight: '20px',
                          fontFamily: 'Untitled Sans'
                        }}
                      >
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
                  css={{
                    borderColor: '$gray700',
                    color: '$gray200',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
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
                          ml: '$1',
                          color: '$gray200',
                          display: 'inline-flex',
                          verticalAlign: 'middle'
                        }}
                      >
                        <AccessibleIcon.Root label='See full type'>
                          <Info size={16} />
                        </AccessibleIcon.Root>
                      </IconButton>
                    </Popover.Trigger>
                    <Popover.Content
                      side='top'
                      css={{
                        width: '100%',
                        py: '$2',
                        px: '$3',
                        fontFamily: 'Untitled Sans'
                      }}
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
                  <Box
                    as={AccessibleIcon.Root}
                    label='No default value'
                    css={{ color: '$gray500' }}
                  >
                    <DividerHorizontalIcon />
                  </Box>
                )}
              </Td>
            </tr>
          )
        )}
      </tbody>
    </RegionTable>
  );
};
