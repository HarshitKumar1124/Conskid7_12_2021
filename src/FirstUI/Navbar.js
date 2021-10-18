import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid"
import "./FirstUI.scss"
import Logo from "../Asset/logo.svg"
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import Profile from "../Asset/Icon awesome-user-circle.svg"
import List from "./List"

const Navbar = () => {

    const [ServiceDrop, SetServiceDrop] = useState(false);

    const ToggleService = () => {
        SetResourceDrop(false)
       SetProfileDrop(false)
        SetServiceDrop(!ServiceDrop);
    }

    const [ResourceDrop, SetResourceDrop] = useState(false);

    const ToggleResource = () => {
        SetResourceDrop(!ResourceDrop);
        SetServiceDrop(false)
       SetProfileDrop(false)
    }

    const [ProfileDrop, SetProfileDrop] = useState(false);

    const ToggleProfile = () => {
        SetProfileDrop(!ProfileDrop);
        SetServiceDrop(false)
       SetResourceDrop(false)
      
    }



    return (
        <>
            <Grid container id="Navbar" >

                <div id="Logo_Div"><img src={Logo} alt="Logo" id="Conskid_Logo" /></div>

                <Grid container id="Service_Resource_Button">
                    <div >
                        <Button id="Service_Button"  size="medium" endIcon={<ArrowDropDownIcon />} onClick={ToggleService} >Services</Button>
                        {
                            ServiceDrop ? <List Number="1" /> : ""
                        }
                    </div>
                    <div >
                        <Button id="Resource_Button"  size="medium" endIcon={<ArrowDropDownIcon />} onClick={ToggleResource}>Resources</Button>
                        {
                            ResourceDrop ? <List Number="2" /> : ""
                        }
                    </div>

                </Grid>

                <div id="Profile_Icon">
                <div >
                    <Button style={{ position: "absolute", left: "7rem", top: "7rem", borderRadius: "25rem" }} onClick={ToggleProfile}><MenuIcon style={{ fontSize: "35rem" }} /></Button>
                    {
                            ProfileDrop ? <List Number="3" /> : ""
                    }
                </div>
                    <img src={Profile} alt="ProfileDP" id="ProfileDP" title="Profile Picture" />
                </div>

            </Grid>
        </>
    )
}

export default Navbar
