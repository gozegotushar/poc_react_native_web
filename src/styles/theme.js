import chroma from 'chroma-js';
import { darken, getTextColor, lighten, Colors as preDefinedColors } from './color';

const getMdButtonTextColor = (hex) => {
  return chroma(hex).get('lab.l') < 70 ? 'white' : 'black';
};

const themeGeneratedColors = (primary, accent) => {
  return {
    accent,
    primary,

    getPrimaryDark40: darken(primary, 30),
    primaryDark25: darken(primary, 10),
    primaryLight75: lighten(primary, 15),
    primaryLight60: lighten(primary, 18),
    primaryLight50: lighten(primary, 20),
    primaryLight15: lighten(primary, 36),
    primaryLight10: lighten(primary, 39),
    primaryLight5: lighten(primary, 56),

    accentDark75: darken(accent, 40),
    accentDark40: darken(accent, 30),
    accentDark25: darken(accent, 10),
    accentLight75: lighten(accent, 10),
    accentLight50: lighten(accent, 20),
    accentLight15: lighten(accent, 36),

    warning: darken(accent, 0.1),
    success: darken(primary, 0.1)
  };
};

export const generateTheme = (primary, accent) => {
  const secondaryColor = accent ? accent : preDefinedColors.gray600;
  const isLightText = getTextColor(primary).toString().toLowerCase() === 'white';
  const themeGeneratedC = themeGeneratedColors(primary, secondaryColor);
  return {
    getPrimaryDark40: () => themeGeneratedC.getPrimaryDark40,
    getPrimaryDark25: () => themeGeneratedC.primaryDark25,
    getPrimary: () => themeGeneratedC.primary,
    getPrimaryLight75: () => themeGeneratedC.primaryLight75,
    getPrimaryLight60: () => themeGeneratedC.primaryLight60,
    getPrimaryLight50: () => themeGeneratedC.primaryLight50,
    getPrimaryLight15: () => themeGeneratedC.primaryLight15,
    getPrimaryLight10: () => themeGeneratedC.primaryLight10,
    getPrimaryLight5: () => themeGeneratedC.primaryLight5,
    getSecondary: () => secondaryColor,
    getAccentDark75: () => themeGeneratedC.accentDark75,
    getAccentDark40: () => themeGeneratedC.accentDark40,
    getAccentDark25: () => themeGeneratedC.accentDark25,
    getAccent: () => themeGeneratedC.accent,
    getAccentLight75: () => themeGeneratedC.accentLight75,
    getAccentLight50: () => themeGeneratedC.accentLight50,
    getAccentLight15: () => themeGeneratedC.accentLight15,

    // mobile doorman
    mdBackground: () => primary,
    mdPrimary: () => primary,
    mdSecondary: () => secondaryColor,
    mdButtonText: () => preDefinedColors.text,
    mdErrorText: () => preDefinedColors.deepRed,
    mdErrorBackground: () => preDefinedColors.lightCoral,

    getInfo: () => preDefinedColors.brightBlue,
    getSuccess: () => preDefinedColors.mint,
    getError: () => preDefinedColors.deepRed,
    getWarning: () => preDefinedColors.solarFlare,
    getErrorBackground: () => preDefinedColors.lightCoral,
    getInfoBackground: () => preDefinedColors.ocean,
    getSuccessBackground: () => preDefinedColors.iceBerg,
    getWarningBackground: () => preDefinedColors.lightGold,
    getCrossColor: () => preDefinedColors.black,

    getBackground: () => preDefinedColors.white,
    getDarkBackground: () => preDefinedColors.white3,
    getNav: () => preDefinedColors.white,
    getModalBackdrop: () => preDefinedColors.black,
    getTouchableBg: () => preDefinedColors.gray500,
    getLightDisabledColor: () => preDefinedColors.doveGray,
    getSnackBarBackground: () => preDefinedColors.navyBlue,
    getPlaceHolderText: () => preDefinedColors.frenchGray,
    getCardBorder: () => preDefinedColors.porcelain,
    getBannerColor: () => preDefinedColors.navyBlue,
    getFooterNote: () => preDefinedColors.ocean,
    getRipple: () => preDefinedColors.ocean,

    getThemedText: () => (isLightText ? preDefinedColors.white : preDefinedColors.black),
    getThemedTextLight: () => (isLightText ? preDefinedColors.gray300 : preDefinedColors.gray600),
    getThemedTextLight2: () => (isLightText ? preDefinedColors.gray300 : preDefinedColors.coolGray),
    getText: () => preDefinedColors.black,
    getText2: () => preDefinedColors.coolGray,
    getTextLight: () => preDefinedColors.gray600,
    getTextDark: () => preDefinedColors.midNight,
    getTextUnderLine: () => preDefinedColors.goldenBrown,
    getLine1: () => preDefinedColors.gray400,
    getLine2: () => preDefinedColors.gray300,
    getDisabledButtonBg: () => preDefinedColors.gray600,
    getBorder1: () => preDefinedColors.gray400,
    isDefault: () => false,
    isLightText: isLightText,

    getOverlayBackground: () => preDefinedColors.darkGray,
    getNoNetworkBackground: () => preDefinedColors.coolGray200,
    getNoNetwork: () => preDefinedColors.coolGray900,
    getProgressBarColor: () => preDefinedColors.lightGray2
  };
};
