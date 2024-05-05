import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        gray: {
          line: "#13171D",
          text: "#46505F",
          secondary: "#D9D9D9",
        },
        blue: "#3D8BFF",
        red: "#13171D",
        indigo: "rgb(49 46 129)",
        purple: "#AB23FF",
      },
      height: {
        inherit: "inherit",
      },
    },
  },
  variants: {
    extend: {
      backgroundSize: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (...params: any) => void }) {
      const newUtilities = {
        ".bg-size-double-x": {
          backgroundSize: "100%",
          transition: "all 0.3s ease-in-out",
        },
        ".bg-size-double-x:hover": {
          backgroundSize: "400% auto",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
