import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme ,ColorModeScript } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}


const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg:mode("#f7f6fe","#0a0529")(props),
        color:mode("#0a0529","#f7f6fe")(props),
      },
      button:{
        bg:mode("#c7e619","#c8e61e")(props),
        padding:'1rem',
        color:mode("#f7f6fe","#0a0529")(props),     
      },
      h1:{
        color:mode("#0a0529","#f7f6fe")(props),
      },
      p:{
        color:mode("#0a0529","#f7f6fe")(props),
      },
      h2:{
        color:mode("#0a0529","#f7f6fe")(props),
      },
      div: {
        // bg:mode("#f7f6fe",'#0a0529')(props),
        // color:mode("#f7f6fe","#f7f6fe")(props),
      }
    }),
  },
  colors: {
    brand: {
      transparent: 'transparent',
      bg:'#0a0529',
      primary:'#c7e619',
      secondary:'#0c0632',
      tertiary:'#b3cf17',
      accent:'#c8e61e',
      text:'#c8e61e',
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
