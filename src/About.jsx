import React from "react";
import web from "../src/images/spaceship.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";


const About =() =>{
    return (
        <>
            <Common name='Welcome to About Page' imgsrc ={web} vist ="/Contact"  btname="Contact Now"/> 
        </>
    );
};


export default About;