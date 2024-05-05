import localFont from "next/font/local";

const MonumentExtendedRegular = localFont({
  src: "../../ui/fonts/MonumentExtended-Regular.woff2",
  display: "swap",
});
const SatoshiBold = localFont({
  src: "../../ui/fonts/Satoshi-Bold.woff2",
  display: "swap",
});
const SatoshiMedium = localFont({
  src: "../../ui/fonts/Satoshi-Medium.woff2",
  display: "swap",
});
const SatoshiRegular = localFont({
  src: "../../ui/fonts/Satoshi-Regular.woff2",
  display: "swap",
});

export const fonts = {
  MonumentExtendedRegular,
  SatoshiBold,
  SatoshiMedium,
  SatoshiRegular,
};
