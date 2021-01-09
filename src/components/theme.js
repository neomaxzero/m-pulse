const greys = {
  50: '#F9FAFB',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
};

const theme = {
  colors: {
    primary: '#ab2ff7',
    primary16: 'rgba(171, 47, 247, 0.16)',
    primaryOverText: '#9529d8',
    error: '#FF431A',
    background: greys[50],
    strong: greys[900],
    text: '#3d4852',
    textSubtle: greys[500],
    greys,
  },
  sizes: {
    0: '0.4rem',
    1: '0.8rem',
    2: '1rem',
    3: '1.125rem',
    4: '1.25rem',
    5: '1.5rem',
    6: '1.875rem',
    7: '2.25rem',
    8: '3rem',
    9: '4rem',
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: greys[900],
    text: greys[100],
    textSubtle: greys[400],
    strong: greys[50],
  },
};

export default theme;
