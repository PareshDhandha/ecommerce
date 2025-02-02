interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
}

export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
};

interface Color {
  primaryRedHex: string;
  primaryOrangeHex: string;
  primaryBlackHex: string;
  primaryDarkGreyHex: string;
  primaryGreyHex: string;
  primaryLightGreyHex: string;
  primaryWhiteHex: string;
  primaryBlackRGBA: string;
  secondaryDarkGreyHex: string;
  secondaryGreyHex: string;
  secondaryLightGreyHex: string;
  secondaryBlackRGBA: string;
}

export const COLORS: Color = {
  primaryRedHex: "#DC3535",
  primaryOrangeHex: "#D17842",
  primaryBlackHex: "#0C0F14",
  primaryDarkGreyHex: "#141921",
  secondaryDarkGreyHex: "#21262E",
  primaryGreyHex: "#252A32",
  secondaryGreyHex: "#252A32",
  primaryLightGreyHex: "#52555A",
  secondaryLightGreyHex: "#AEAEAE",
  primaryWhiteHex: "#FFFFFF",
  primaryBlackRGBA: "rgba(12,15,20,0.5)",
  secondaryBlackRGBA: "rgba(0,0,0,0.7)",
};

interface FontFamily {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
}

export const FONTFAMILY: FontFamily = {
  poppins_black: "Poppins_Black",
  poppins_bold: "Poppins_Bold",
  poppins_extrabold: "Poppins_ExtraBold",
  poppins_extralight: "Poppins_ExtraLight",
  poppins_light: "Poppins_Light",
  poppins_medium: "Poppins_Medium",
  poppins_regular: "Poppins_Regular",
  poppins_semibold: "Poppins_SemiBold",
  poppins_thin: "Poppins_thin",
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
};

interface BorderRadius {
  redius_4: number;
  redius_8: number;
  redius_10: number;
  redius_15: number;
  redius_20: number;
  redius_25: number;
}

export const BORDERRADIUS: BorderRadius = {
  redius_4: 4,
  redius_8: 8,
  redius_10: 10,
  redius_15: 15,
  redius_20: 20,
  redius_25: 25,
};
