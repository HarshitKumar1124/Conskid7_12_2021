import React from 'react'
import "./Services.scss";
import Grid from "@material-ui/core/Grid"
import Template from "./Template"
import Services_Object from "./Service_Content"

import CareerCounselling from "../Asset/career_counselling.svg"
import test_paper from "../Asset/test_paper.svg"
import CV from "../Asset/CV.svg"
import mock_interview from "../Asset/mock_interview.svg"

import Logo from "../Asset/Group 2577.svg"


const Services = () => {
    return (
        <>
            <Grid container xs={12} id="Service_Container">



                <Grid xs={12} item id="Service_Heading" >What is conskid?</Grid>

                <Grid xs={12} item container id="Conskid_define_container">
                    <Grid  item id="Conskid_define_content" >CONSKID is a comprehensive online platform to support young undergrad aspirants in achieving career milestones. We strive to empower the learners through skill-enhancing services & industrial exposure suited to their skills & interest.</Grid>

                    <Grid xs={12} item id="Service_Logo" ><img src={Logo} style={{height:"100%",paddingLeft:"200rem",position:"relative",top:"-100rem"}}/></Grid>

                </Grid>


                <Grid xs={12} item id="Service_Heading" >Benefits for you</Grid>
                <Grid xs={12} item container id="Service_Template_container" >

                    <Grid item container id="Template_container" >


                        <Template Heading={Services_Object[0].Heading} Logo={CareerCounselling} WritenContent={Services_Object[0].content} id={Services_Object[0].Heading} />
                        <Template Heading={Services_Object[1].Heading} Logo={CareerCounselling} WritenContent={Services_Object[1].content} id={Services_Object[1].Heading} />
                        <Template Heading={Services_Object[2].Heading} Logo={test_paper} WritenContent={Services_Object[2].content} id={Services_Object[2].Heading} />
                        <Template Heading={Services_Object[3].Heading} Logo={CV} WritenContent={Services_Object[3].content} id={Services_Object[3].Heading} />
                        <Template Heading={Services_Object[4].Heading} Logo={test_paper} WritenContent={Services_Object[4].content} id={Services_Object[4].Heading} />
                        <Template Heading={Services_Object[5].Heading} Logo={mock_interview} WritenContent={Services_Object[5].content} id={Services_Object[5].Heading} />





                    </Grid>


                </Grid>


            </Grid>
        </>
    )
}

export default Services