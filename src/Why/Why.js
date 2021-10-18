import React from 'react'
import "./Why.scss";
import Grid from "@material-ui/core/Grid"
import Template from "./Template"
import Guidance from "../Asset/guidance.svg"
import course from "../Asset/course.svg"

const Why = () => {
    return (
      <>
        <Grid container xs={12} id="Why_Container">
           
           <Grid xs={12} item id="Why_Heading" >Why choose us?</Grid>
           <Grid  container item id="Template_container" >
               <Template id="1" Logo={Guidance}Heading="Guidance and Mentorship"/>
               <Template id="2" Logo={course} Heading="Certified Courses"/>
               <Template id="3" Logo={course} Heading="Internship Pool"/>
           </Grid>
        </Grid>
      </>
    )
  }
  
  export default Why
  