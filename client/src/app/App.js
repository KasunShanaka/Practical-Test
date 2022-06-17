import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Homepage from '../pages/Homepage/Homepage';
import Layout from '../components/Layout/Layout.js';

//Custom theme
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Create custom MUI theme
const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: '#F5F9FF'
    },
    primary: {
      main: "#042C5C",
    },
    secondary: {
      main: "#F48C04",
    },
    error: {
      main: "#EF3935",
    },
    background: {
      paper: "#F5F9FF",
    },
    action: {
      active: "#042C5C"
    }
  },
  typography: {
    fontFamily: " \"Poppins\", \"Roboto\", \"Helvetica\", sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    shape: {
      borderRadius: 4
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: " \"Poppins\", \"Roboto\", \"Helvetica\", sans-serif",
      color: "rgba(0, 0, 0, 0.87)"
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme} >
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter >
      </Layout>
    </ThemeProvider>
  );
}

export default App;
