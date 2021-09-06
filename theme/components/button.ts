export const Button = {
  baseStyle: {
    outline: 'none',
    appearance: 'none',
    borderRadius: '4xl',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: 1.5,
    padding: '8px 24px',
    transition:
      'color 300ms ease-out, background 300ms ease-out, opacity 300ms ease-out',
    border: '1px solid'
  },
  variants: {
    grey: {
      bg: 'gray.500',
      color: 'white',
      borderColor: 'gray.500',
      '&:hover': {
        bg: 'black',
        color: 'white'
      }
    },
    white: {
      bg: 'white',
      color: 'brand.500',
      borderColor: 'brand.500',
      '&:hover': {
        bg: 'brand.500',
        color: 'white'
      }
    },
    blue: {
      bg: 'brand.500',
      color: 'white',
      borderColor: 'brand.500',
      '&:hover': {
        bg: 'white',
        color: 'brand.500',
        borderColor: 'brand.500'
      }
    },
    black: {
      bg: 'black',
      color: 'white',
      borderColor: 'black',
      opacity: '50%',
      '&:hover': {
        bg: 'black',
        borderColor: 'white',
        opacity: '100%'
      }
    }
  },
  defaultProps: {
    variant: 'blue'
  }
};
