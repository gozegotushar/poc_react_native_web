import { TinyColor } from '@ctrl/tinycolor';
import chroma from 'chroma-js';

// amount is 0 - 100 given 100 will always return black
export const darken = (color, amount = 15) =>
  new TinyColor(color).darken(amount).toString();

export const lighten = (color, amount = 15) =>
  new TinyColor(color).lighten(amount).toString();

export const setAlpha = (color, value) =>
  new TinyColor(color).setAlpha(value).toString();

export const getTheme = color => new TinyColor(color).isLight();

export const getContrastColor = (color, value1, value2) =>
  getTheme(color) ? darken(color, value1) : lighten(color, value2);

export const getSecondaryColor = hex => {
  const hsv = chroma(hex).hsv();
  hsv[1] -= 0.16;
  hsv[2] += 0.44;
  return chroma({ h: hsv[0], s: hsv[1], v: hsv[2] }).hex();
};

export const getTextColor = color => {
  if (new TinyColor(color).getLuminance() > 0.179) {
    return 'black';
  } else {
    return 'white';
  }
};

// only define those colors here that have a specific name
// functionality related color names should be defined in the theme
export const Colors = {
  transparent: '#00000000',
  black: '#000000',
  black15: 'rgba(0, 0, 0, 0.15)',
  black40: 'rgba(0, 0, 0, 0.4)',
  black60: 'rgba(0, 0, 0, 0.6)',
  black70: 'rgba(0, 0, 0, 0.7)',
  darkGray: 'rgba(14, 20, 39, 0.5)',
  doveGray: 'rgba(112, 112, 112, 0.5)',
  lightGray1: 'rgba(237, 237, 237, 0.75)',
  lightGray2: '#E7E7E7',
  porcelain: '#F0F1F2',
  grayChateau: '#B0B6BD',
  frenchGray: '#C7C7CD',
  gray300: '#D4D4D4',
  gray400: '#BABABA',
  gray500: '#CDCDCD',
  gray600: '#8A8D9E',
  white: '#FFFFFF',
  white2: '#F5F5F5',
  white3: '#EDEDED',
  white4: '#E5E5E5',
  white90: 'rgba(255,255,255,0.9)',
  white0: 'rgba(0,0,0,0)',
  darkBlue: '#0E1427',
  navyBlue: '#0C173C',
  purple: '#3B0673',
  lightPurple1: '#B0B5E7',
  lightPurple2: '#8287B6',
  lightPurple3: '#494d77',
  brightPurple: '#3B3E98',
  twilight: '#213061',
  seeFoam: '#06846E',
  mint: '#59C09B',
  hintOfMint: '#ACE0CD',
  iceBerg: '#E6F6F0',
  brightBlue: '#029EC6',
  ocean: '#E6F5F9',
  lightGold: '#FFF4DF',
  solarFlare: '#FDB627',
  goldenYellow: '#FF9F00',
  deepRed: '#C51F47',
  coral: '#EE305A',
  lightCoral: '#FCE0E6',
  babyPink: '#F697AC',
  dirtyBrown: 'rgba(253, 182, 39, 0.5)',
  lightGrey: '#DDDDDD',
  goldenBrown: '#B1801B',
  lightBrown: '#B17F1B',
  midNight: '#0E1427',
  repair: '#F697AC',
  dirty: 'rgba(253, 182, 39, 0.5)',
  lightBlue: '#D9F0F6',
  text1: '#0E1427',
  lightGold30: '#FFF4DF33',
  coolGray: '#5C6274',
  coolGray200: '#E8E8EC',
  coolGray900: '#7C7F8E',
  gray58: '#949494',
  spaceBlue: '#0C173C',
  mediumBlue: '#9AD8E8',
};
