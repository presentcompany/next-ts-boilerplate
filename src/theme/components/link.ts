export const Link = {
  baseStyle: {
    fontStyle: 'normal'
  },
  variants: {
    textLink: {
      color: 'brand.500',
      fontWeight: 500,
      fontSize: '11px',
      textDecoration: 'none',
      lineHeight: '1',
      backgroundImage:
        'linear-gradient(rgb(34, 32, 193), rgb(34, 32, 193)), linear-gradient(rgb(34, 32, 170), rgb(34, 32, 170))',
      backgroundSize: '100% 2px, 0 2px',
      backgroundPosition: '100% 100%, 0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'color 300ms ease-out, background-size 300ms ease-out',
      '&:hover': {
        color: '#2220aa',
        backgroundSize: '0 2px, 100% 2px',
        textDecoration: 'none'
      }
    },
    footerLink: {
      color: 'black',
      fontWeight: 300,
      fontSize: '13px',
      textDecoration: 'none',
      lineHeight: '1.1',
      backgroundImage: 'linear-gradient(#000000, #000000)',
      backgroundSize: '0 2px',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 300ms ease-out',
      '&:hover': {
        backgroundSize: '100% 2px',
        textDecoration: 'none'
      }
    },
    headerLink: {
      color: 'black',
      fontWeight: 500,
      fontSize: '14px',
      textDecoration: 'none',
      lineHeight: '21px',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    mobileNavLink: {
      color: 'black',
      fontWeight: 500,
      fontSize: '14px',
      textDecoration: 'none',
      lineHeight: '21px',
      '&:hover': {
        opacity: '0.5'
      }
    }
  },
  defaultProps: {
    variant: 'textLink'
  }
};
