
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components/navbar/MyNavbar';
import Router from './components/router/Router';
import Footer from './components/footer/Footer'




// import Dashboard from "./Dashboard";


function App() {
  

  return (
      <>
      <BrowserRouter>
        
        <MyNavbar />
        <Router />
        <Footer />
      </BrowserRouter>
      </>
  );
}
 
export default App;



