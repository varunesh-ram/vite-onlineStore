import React, { useState } from "react";
import {EMPTY_FORM_DATA,LOGIN,USERNAME,PASSWORD} from "../../utils/constants";
import "./index.css";

const Login = () => {
const [formData,setFormData] = useState(EMPTY_FORM_DATA);

const updateFormData = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 return (
    <div className="login-container">
      <div className="login-form">
        <h1 data-testid="login-heading">{LOGIN}</h1>
         <div className="form-group">
            <input type="text" name="username" placeholder={USERNAME} value={formData.username}
                    onChange={updateFormData} />
            <input type="password" name="password" placeholder={PASSWORD} value={formData.password}
                    onChange={updateFormData} />
            <button className="form-button" data-testid="login-id"
          onClick={()=>{}} >{LOGIN}</button>
         </div>
      </div>
    </div>
 );
};


export default Login;