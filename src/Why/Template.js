import React, {useEffect} from 'react'
import "./Why.css";
import Grid from "@material-ui/core/Grid"
import Guidance from "../Asset/guidance.svg"
import Background from "../Asset/Group 239.svg"


const Why = (props) => {

    
    

       return (
        <>
            <Grid container item xs={12} className="Template" style={{backgroundImage: `url(${Background})`}} >
               

                
            
                <Grid container xs={11}style={{justifyContent:"space-between"}} >
                {/* border:"2px solid Magenta" */}

                {((props.id)%2===0)?<Grid item container className="vectorBlock"><img src={props.Logo} alt="Images"  title={props.Heading} /></Grid>:""}

                    <Grid item container className="HeadBlock">

                        <Grid className="Heading">{props.Heading}</Grid>
                        <Grid className="SomeText">{props.Content} </Grid>


                    </Grid>
                    {((props.id)%2!==0)?<Grid item container className="vectorBlock"><img src={props.Logo} alt="Images" title={props.Heading} /></Grid>:""}
                </Grid>

            </Grid>
        </>
    )
}

export default Why