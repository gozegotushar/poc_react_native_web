export const SET_THEME_COLORS_LOCAL = 'SET_THEME_COLORS_LOCAL';
export const setThemeColorsFromLocal = (primaryColor, secondaryColor) => ({
  type: SET_THEME_COLORS_LOCAL,
  primaryColor,
  secondaryColor,
});

export const SET_PRIMARY_COLOR = 'SET_PRIMARY_COLOR';
export const setPrimaryColor = (primaryColor) => ({
  type: SET_PRIMARY_COLOR,
  primaryColor,
});

export const SET_SECONDARY_COLOR = 'SET_SECONDARY_COLOR';
export const setSecondaryColor = (secondaryColor) => ({
  type: SET_SECONDARY_COLOR,
  secondaryColor,
});


