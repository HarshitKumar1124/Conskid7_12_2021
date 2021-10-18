import react, { useState } from 'react'
import "./ComingSoon.scss"
import Grid from "@material-ui/core/Grid"
import Mason from "../Asset/Component 43 – 1.svg"
import Button from '@material-ui/core/Button'
import Logo from "../Asset/Layer 2.svg"
import { Link } from 'react-router-dom'



const ComingSoon = () => {

    const [email,setemail]=useState("");

    const UpdateEmail=(ele)=>{
        setemail(ele.target.value)
        
    }


    const Notify_Click = () => {
        

       setemail("");
     
    }

    return (
        <>
            <Grid xs={12} id="ComingSoon_container" style={{ alignSelf: "flex-start", position: "relative" }}>
                <Grid container xs={12} style={{ height: "111rem", alignSelf: "flex-start" }}>
                    {/* border: "2px solid red", */}
                    <div id="Logo"><Link tag="a" to="/"><img src={Logo} alt="Logo" title="Click to navigate to Home Page" /></Link></div>
                </Grid>
                <Grid item xs={12} id="Content" style={{ alignSelf: "flex-start", height: "90%" }}>
                    {/* border: "2px solid green", */}
                    <Grid container style={{ justifyContent: "center" }}>
                        {/* border: "2px solid magenta",  */}
                        <img src={Mason} style={{ width: "390rem", height: "372rem", marginTop: "70rem", marginBottom: "45rem" }} />
                    </Grid>
                    <Grid item xs={12} id="Building" style={{ height: "413rem", position: "absolute", bottom: "0rem", width: "100%" }}>
                        {/* border: "2px solid red", */}
                        <h3>COMING SOON</h3>
                        <p>ARE YOU READY?</p>
                        <Grid container style={{ justifyContent: "center" }}>
                            {/* border: "2px solid magenta",  */}
                            <div style={{ width: "657rem", height: "65rem", display: "flex" }}>
                                {/* border: "2px solid green", */}
                                <input type="email" placeholder="YOUR EMAIL" value={email} onChange={UpdateEmail} style={{ width: "70%", height: "100%", color: "#ACACAC", fontSize: "30rem", padding: "16rem 0 16rem 29rem" }} />
                                <Button style={{ backgroundColor: "#00A1A4", color: "white", fontSize: "30rem", fontFamily: "UbantuM", width: "30%", textAlign: "center", padding: "16rem 0rem" }} onClick={Notify_Click}>NOTIFY ME</Button>
                         
                            </div>

                         
                        </Grid>
                    </Grid>


                </Grid>


            </Grid>
            
        </>
    )
}

export default ComingSoon
