import { useMemo, useSelector } from "react"; 
import { appWithTranslation } from 'next-i18next';
import Header from '../components/Header';
import '../styles/globals.scss';
import { createTheme } from "@mui/material/styles";
import { theme } from '../theme/theme';
import { CssBaseline, ThemeProvider } from "@mui/material"; 

function MyApp({ Component, pageProps }) { 
  const appTheme = useMemo(() => createTheme(theme("dark")), ["dark"]);// appTheme olarak adlandırıldı

  return (
    <> 
    <ThemeProvider theme={appTheme}>
    <CssBaseline />
        <Component {...pageProps} /> 
    </ThemeProvider>
      </>
  );
}

export default appWithTranslation(MyApp);
