import React from 'react'
import "./Journey.scss"
import Grid from "@material-ui/core/Grid"
import CardDesign from "../Asset/Path399.svg"
import DP from "../Asset/depositphotos_8803246-stock-photo-asian-college-student@2x.png"



const Card = () => {
    return (
        <>
            <Grid className="Card">

                <Grid className="Card_Text_Holder">
                    <Grid className="Card_Content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor inuis autem vel eum iriure dolor in henduis autem vel eum iriure dolor inuis autem vel</Grid>
                </Grid>
                <Grid className="Name_Holder">
                    <img src={DP} alt="ProfileDP" title="Name" />
                  
                    <div>
                        <p>Biswa Kumar Sir</p>
                        <span>IIT Ashoke Nagar<br/>Intern At Amazon</span>
                        
                    </div>
                </Grid>

            </Grid>
        </>
    )
}

export default Card
