const size = {
  min: '440px',
  mobile: '768px',
  tablet: '920px',
  desktop: '2400px',
};

const theme = {
  min: `(max-width: ${size.min})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
