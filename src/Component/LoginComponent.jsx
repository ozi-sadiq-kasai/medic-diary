import { LoginApi } from "../Api/LoginApi"
import { Link } from "react-router-dom"
import { useState } from "react" 
import { toast } from 'react-toastify';
import '../Sass/LoginComponent.scss'
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
 const [input,setInput] = useState({email:"",password:""})
 const navigate = useNavigate();

 const handleInputChange = (e)=>{
  const { name,value } = e.target
  setInput((prevInput) => ({...prevInput,[name]:value}))
   // console.log(input)
 }

 const handleLogin = async () => {
  try {
    const response = await LoginApi(input.email, input.password);
    toast.success("Login Successful");
    localStorage.setItem("userEmail",response.user.email)
    setInput({
      email: "",     // Clear email field
      password: ""   // Clear password field
    });
    navigate('/post');
    // console.log("Logged in", response);
  } catch (error) {
    toast("Wrong Email or Password!");
    setInput({
      email: "",     // Clear email field
      password: ""   // Clear password field
    });
  }
};

  return (
    <div className="login-main">
     {/* <h1>Sign into Medic Diary</h1> */}
     <div className= "login-inputs">
      <h1 className="headline">Sign into <span className="headline-span">Medic-Diary</span></h1>
       <input 
      type="email"
      name="email"
      placeholder="Enter Email"
      onChange={handleInputChange}
      value={input.email}
       />
      <input 
         type="password"
         name="password"
         placeholder="Enter Password"
         onChange={handleInputChange}
         value={input.password}
       />
 
      <button onClick={handleLogin}>Sign in</button>
     <p className="register">New to Medic-Diary? <Link to="/register">Register Now</Link></p>
     </div>
    
   </div>
  )
}