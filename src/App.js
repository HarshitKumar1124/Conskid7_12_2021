import React from 'react'
import "./App.scss";
import Grid from "@material-ui/core/Grid"
import FirstUI from "./FirstUI/FirstUI"
import Footer from "./Footer/Footer"
import Journey from "./Journey/Journey"
import Why from "./Why/Why"
import Services from "./Services/Services"





const App = () => {
  return (
    <>
      <Grid container xs={12} id="App_Container">
          <FirstUI/> 
          <Services/>
          <Why/>
          <Journey/>
          <Footer/>
          
      </Grid>

    
      
    </>
  )
}

export default App
