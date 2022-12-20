import React, { useState, useEffect } from 'react';
// import './App.css';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

// function App() {
//   const [apiResponse, setapiResponse] = useState(0);
//   function callAPI() {
//       fetch("http://localhost:8000/api")
//           .then(res => res.text())
//           .then(res => console.log(res))
//           // .then(res => setapiResponse(res));
//   }
//   return (
//     <div className="App">
//       <button onClick={(e)=>callAPI()}> {apiResponse} </button>
//     </div>
//   );
// }

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
