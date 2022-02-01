import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouteList from "./Routes";
import { Helmet } from 'react-helmet';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const pageTitle = 'BlogRoute - Learning to do Routing with React!'
const bgColor = '#8BD9C7';

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#4DB4D7',
      secondary: '#95D8EB',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E33E7F'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <title>{pageTitle}</title>
        <style>
          {`
            body {
              background-color: ${bgColor};
            }
          `}
        </style>
      </Helmet>
      <RouteList />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
