import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import store from "./redux/store";
import theme from "./mui/theme";
import "./App.css";
import Layout from "./components/layout/layout";
import '@fontsource/roboto';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
