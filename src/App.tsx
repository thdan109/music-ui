import { createTheme,ThemeProvider} from "@mui/material";
import Layout from "./pages/Layout/Layout";
import "./App.css";

function App() {
  let theme = createTheme({
    typography: {
      fontFamily: ['"Montserrat"', "Open Sans"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
