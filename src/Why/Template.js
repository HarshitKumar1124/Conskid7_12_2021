import React from 'react'
import "./Why.scss";
import Grid from "@material-ui/core/Grid"
import Guidance from "../Asset/guidance.svg"


const Why = (props) => {
    return (
        <>
            <Grid container item xs={12} className="Template">

                <Grid container xs={11}style={{justifyContent:"space-between"}} >
                {/* border:"2px solid Magenta" */}

                {((props.id)%2===0)?<Grid item container className="vectorBlock"><img src={props.Logo} alt="Images" title={props.Heading} /></Grid>:""}

                    <Grid item container className="HeadBlock">

                        <Grid className="Heading">{props.Heading}</Grid>
                        <Grid className="SomeText"> Internship gives you exposure to real world experience where you put your skills to work alongside accomplished industry professionals.We offer year-round internship opportunities suited  </Grid>


                    </Grid>
                    {((props.id)%2!==0)?<Grid item container className="vectorBlock"><img src={props.Logo} alt="Images" title={props.Heading} /></Grid>:""}
                </Grid>

            </Grid>
        </>
    )
}

export default Why