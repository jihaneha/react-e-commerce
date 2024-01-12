import Header1 from "./components/header/header1";
import Header2 from "./components/header/header2";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Header3 from "./components/header/Header3";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Hero />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
