import { colors, typography } from './basic';

export const theme = {
  ...colors,
  ...typography,
  layout: {
    width: '190rem',
    sidePadding: '3rem',
    background: colors.monoColors.white
  }
};

export default theme;
