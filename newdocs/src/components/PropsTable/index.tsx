/** @jsxImportSource react */
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { Info } from 'phosphor-react';
import { ComponentProps, ElementType } from 'react';
import { IconButton, Popover, Text } from '../../../../packages/react/dist';
import { CSS, styled } from '../../styles/stitches';
import { DividerHorizontalIcon } from './DividerHorizontal';
import { RegionTable } from './RegionTable';

const StyledBox = styled('div', {
  boxSizing: 'border-box'
});

interface BoxProps extends ComponentProps<typeof StyledBox> {
  as?: ElementType;
  css?: CSS;
}

const Box = ({ children, css, ...props }: BoxProps) => (
  <StyledBox css={css} {...props}>
    {children}
  </StyledBox>
);

const Td = styled('td', {
  py: '$3',
  pr: '$4',
  whiteSpace: 'nowrap',
  height: '$12',
  verticalAlign: 'center'
});

export const Code = styled('code', {
  fontFamily: 'Fira Code',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',
  padding: '0 3px 2px 3px',
  borderRadius: 0,
  margin: 0,

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
        borderCollapse: 'collapse'
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
                  width: '100%',
                  display: 'flex'
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
                          color: '$gray200',
                          height: '$6',
                          width: '$6'
                        }}
                      >
                        {/* <AccessibleIcon label='Prop description'> */}
                        <Info size={16} />
                        {/* </AccessibleIcon> */}
                      </IconButton>
                    </Popover.Trigger>
                    <Popover.Content
                      side='top'
                      onOpenAutoFocus={event => {
                        event.preventDefault();
                        (event.currentTarget as HTMLElement)?.focus();
                      }}
                    >
                      <Box
                        css={{
                          py: '$2',
                          px: '$3'
                        }}
                      >
                        <Text size='sm' css={{ lineHeight: '20px' }}>
                          {description}
                        </Text>
                      </Box>
                    </Popover.Content>
                  </Popover.Root>
                )}
              </Td>
              <Td
                css={{
                  width: '27.5%'
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
                      css={{ maxWidth: 'max-content' }}
                    >
                      <Box
                        css={{
                          py: '$2',
                          px: '$2',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <Code>{type}</Code>
                      </Box>
                    </Popover.Content>
                  </Popover.Root>
                )}
              </Td>
              <Td
                css={{
                  width: '27.5%'
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
                    as={AccessibleIcon}
                    // label='No default value'
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
