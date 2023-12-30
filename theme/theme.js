  
  // mui theme settings
  export const theme = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                dark: "#3839E3",
                main: "#4A4EFF",
                light: "#00353F",
                medium: "#B0B1FF",
                green:"#34D8BD",
                green2:"#57b3a4",
                greenShadow:"#34d8bda3",
                red:"#ef8787",
                red2:"#b35757",
                redShadow:"#ef87879e",
                dashboardHeaderLink:"#fff",
              },
              neutral: {
                dark: "#E0E0E0",
                main: "#FFFFFF",
                mediumMain: "#A3A3A3",
                medium: "#9EA7BE",
                light: "#E6FBFF",
                text: "#F4F4F4",
                inputBg: "#363d55",
                modalBorder: "#3f434e",
                loaderForeground:"#29324c",
                loaderBackground:"#1e2742",
              },
              background: {
                default: "#1a223a",
                publicDefault: "#171D25",
                alt: "#1e2742",
                cardGradient: "linear-gradient(124.76deg, #3337E4 0%, #8367B3 122.3%);",
                cardBg: "#2D3651",
                cardBg2: "#262d44",
                cardBg3: "#12182B",
                cardBg4:"rgba(255, 255, 255, 0.05)",
                newOrderCardBg: "#2D3651",
                modalBg:"rgba(255, 255, 255, 0.05)",
                buyBg:"#1d3649",
                sellBg:"#342e45"
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: "#3839E3",
                main: "#4A4EFF",
                light: "#E6FBFF",
                medium: "#8183b4",
                green:"#4eaf9e",
                greenShadow:"#34d8bda3",
                green2:"#5cbdac",
                red:"#da7272",
                red2:"#b35757",
                redShadow:"#ef87879e",
                dashboardHeaderLink:"#4144FF",
              },
              neutral: {
                dark: "#333333",
                main: "#232323",
                mediumMain: "#858585",
                medium: "#787878",
                light: "#F0F0F0",
                text: "#7f7f7f",
                inputBg: "#e5e5e5",
                modalBorder: "#dbdbdb",
                loaderForeground:"#f2f2f2",
                loaderBackground:"#d1d1d1",
              },
              background: {
                default: "#F6F6F6",
                publicDefault: "#171D25",
                alt: "#FFFFFF",
                cardGradient: "linear-gradient(124.76deg, #3337E4 0%, #8367B3 122.3%);",
                cardBg: "#e9e9e9",
                cardBg2: "#e9e9e9",
                cardBg3: "#d3d3d3",
                cardBg4:"rgba(0, 0, 0, 0.05)",
                newOrderCardBg: "linear-gradient(124.76deg, #3337E4 0%, #8367B3 122.3%);",
                modalBg:"rgba(255, 255, 255, 0.5)",
                buyBg:"#d7e9e6",
                sellBg:"#f1e2e2"
              },
            }),
      },
      typography: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Manrope", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Manrope", "sans-serif"].join(","),
          fontSize: 32,
          fontWeight:800,
          textTransform:"none"
        },
        h3: {
          fontFamily: ["Manrope", "sans-serif"].join(","),
          fontSize: 22,
          fontWeight:600,
          textTransform:"none"
        },
        h4: {
          fontFamily: ["Manrope", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Manrope", "sans-serif"].join(","),
          fontSize: 16,
          fontWeight:600,
          textTransform:"none"
        },
        h6: {
          fontFamily: ["Manrope", "sans-serif"].join(","),
          fontSize: 14,
          fontWeight:500,
          textTransform:"none"
        },
      },
    };
  };