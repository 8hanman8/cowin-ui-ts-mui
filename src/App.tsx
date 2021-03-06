import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import store from "./redux/store";
import Theme from "./mui/theme";
import "./App.css";
import Layout from "./components/layout/layout";
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
