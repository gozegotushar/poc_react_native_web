import { SET_THEME_COLORS_LOCAL, SET_PRIMARY_COLOR, SET_SECONDARY_COLOR } from '../actions';

const initialState = {
  local: undefined,
};

const overriddenConfig = (state = initialState, action) => {
  const { type, primaryColor, secondaryColor } =
    action;

  switch (type) {
    case SET_THEME_COLORS_LOCAL:
      return {
        ...state,
        local: {
          ...state.local,
          primaryColor: primaryColor.trim(),
          secondaryColor: secondaryColor.trim(),
        },
      };
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        local: {
          ...state.local,
          primaryColor: primaryColor.trim(),
        },
      };
    case SET_SECONDARY_COLOR:
      return {
        ...state,
        local: {
          ...state.local,
          secondaryColor: secondaryColor.trim(),
        },
      };
    default:
      return state;
  }
};

export default overriddenConfig;
