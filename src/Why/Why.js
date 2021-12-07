import React from 'react'
import "./Why.css";
import Grid from "@material-ui/core/Grid"
import Template from "./Template"
import Guidance_ContentList from "./Guidance_List";

const Why = () => {
    return (
      <>
        <Grid container xs={12} id="Why_Container">
           
           <Grid xs={12} item id="Why_Heading" >Why choose us?</Grid>
           <Grid  container item id="Template_container" >
             {
               Guidance_ContentList.map((e)=>{
                 return  <Template id={e.id} Logo={e.Logo}Heading={e.Heading} Content={e.Content}/>
               })
             }
              
        
           </Grid>
        </Grid>
      </>
    )
  }
  
  export default Why
  