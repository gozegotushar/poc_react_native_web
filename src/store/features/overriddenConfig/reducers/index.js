import { SET_THEME_COLORS_LOCAL } from '../actions';

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

    default:
      return state;
  }
};

export default overriddenConfig;
