export const SET_THEME_COLORS_LOCAL = 'SET_THEME_COLORS_LOCAL';
export const setThemeColorsFromLocal = (primaryColor, secondaryColor) => ({
  type: SET_THEME_COLORS_LOCAL,
  primaryColor,
  secondaryColor,
});
