import Home from "./Home";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Header from "./Header"
import Register from "./Register";
import Login from "./Login";


function App() {
  return (
    <div className="App">
    {/* <Router>   */}
        <Navbar/>
      <Routes>
                <Route exact path="/" element={<Home/>} /> 
                <Route exact path="/about" element={<About/>} /> 
                <Route exact path="/service" element={<Service/>} /> 
                <Route exact path="/contact" element={<Contact/>} /> 
                <Route extact path= "/header"element={<Header/>}/>
                <Route extact path= "/register"element={<Register/>}/>
                <Route extact path= "/login"element={<Login/>}/>
                {/* <Navigate to="/" /> */}
                
            </Routes>

    {/* </Router > */}
    </div>
  );
}

export default App;
