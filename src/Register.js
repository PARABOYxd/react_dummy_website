import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Register=(props)=>{

    let history = useNavigate();  
    const [data, setData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        number:"",
        code:"",
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]:e.target.value});

        console.log(data)
    }

    const submitForm =(e)=>{
        e.preventDefault();
      const  sendData ={
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password,
            number:data.number,
            code:data.code,

        }

        console.log(sendData)

        axios.post("http://localhost/register/insert.php",sendData)
        .then((result)=>{
            if(result.data.status =='Invalid'){
          alert('Invalid User');
            }
          else {
            history(`/`);
          } 
        })
    }
    return(
        <div className="main-box">
            <from onSubmit={submitForm}>
         < div className="row">
             <div className="col-md-12 text-center"><h1>Register</h1></div>
        
         </div>
            <div className="row">
                <div className="col-md-6">First Name</div>
                <div className="col-md-6">
                    <input type="text" name="first_name" className="form-control"
                    onChange={handleChange} value={data.first_name}
                    />

                </div>

            </div>

            <div className="row">
                <div className="col-md-6">Last Name</div>
                <div className="col-md-6">
                    <input type="text" name="last_name" className="form-control"
                    onChange={handleChange} value={data.last_name}
                    />

                </div>

            </div>

            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control"
                    onChange={handleChange} value={data.email}
                    />

                </div>

            </div>

            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" className="form-control"
                    onChange={handleChange} value={data.password}
                    />

                </div>

            </div>

            <div className="row">
                <div className="col-md-6">Number</div>
                <div className="col-md-6">
                    <input type="phone" name="phone" className="form-control"
                    onChange={handleChange} value={data.phone}
                    />

                </div>

            </div>

            <div className="row">
                <div className="col-md-6">Country Code</div>
                <div className="col-md-6">
                    <input type="text" name="code" className="form-control" 
                    onChange={handleChange} value={data.code}
                    />

                </div>

            </div>


            <div className="row">
                <div className="col-md-12 text-center">
                    <input type="submit" name="submit" onClick={submitForm} value="Register" className="btn btn-success" />

                </div>

            </div>
            </from>
        </div>
    );
};
export default Register;