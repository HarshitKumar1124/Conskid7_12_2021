import React from 'react'
import "./Services.css";
import Grid from "@material-ui/core/Grid"





const Template = (props) => {

    
    return (
        <>
            <Grid item container className="Template" id={props.id}>

                <Grid item container className="Circular_Logo">
                  
                  <img src={props.Logo} alt={props.Heading} title={props.Heading}/>
                  

                </Grid>
                <Grid container className="Template_content">

                    <p className="Head">{props.Heading}</p>
                    <Grid className="Content">{props.WritenContent}</Grid>
                </Grid>


            </Grid>
        </>
    )
}

export default Template