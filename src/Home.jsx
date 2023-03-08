import React from "react";
import web from "../src/images/suit.png";
import { NavLink } from "react-router-dom";
import Common from "./Common"


const Home =() =>{
    return (
        <>
            <Common name='Welcome to Home Page' imgsrc ={web} vist ="/Contact"  btname="Get started"/> 
        </>
    );
};


export default Home;