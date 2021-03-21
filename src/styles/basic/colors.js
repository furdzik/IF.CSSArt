export const color = {
  darkRed: '#d92c2e', // ok
  green: '#77d4ab',
  blue: '#13b5ea', // ok
  darkGray: '#303030' // ok
};

export const mainColors = {
  primary: color.darkRed,
  secondary: color.darkGray,
  tertiary: '',
  quaternary: ''
};

export const monoColors = {
  white: '#ffffff',
  black: '#000000'
};

export const textColors = {
  primary: monoColors.black,
  secondary: mainColors.darkGray,
  colored: mainColors.primary
};

export const colors = {
  color,
  mainColors,
  textColors,
  monoColors
};
