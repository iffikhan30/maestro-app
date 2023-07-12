const Heading = {
  Heading: {
    // Can pass also function, giving you access theming tools
    baseStyle: ({ colorMode }) => {
      return {
        bg: colorMode === 'dark' ? 'secondary.100' : 'primary.100',
        color: colorMode === 'dark' ? 'primary.100' : 'secondary.100',
        fontWeight: 'normal',
      };
    },
    defaultProps: {
      size: 'lg'
    },
    sizes: {
      xl: {
        fontSize: '64px'
      },
      lg: {
        fontSize: '320x'
      },
      md: {
        fontSize: '16px'
      },
      sm: {
        fontSize: '12px'
      }
    }
  },
}

export default Heading;