import { LoginApi,GoogleSignInApi } from "../Api/LoginApi"
import { Link } from "react-router-dom"
import { useState } from "react" 
import { toast } from 'react-toastify';
import GoogleButton from 'react-google-button'
import '../Sass/LoginComponent.scss'
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
 const navigate = useNavigate();
 const [input,setInput] = useState({email:"",password:""})

 const handleInputChange = (e)=>{
  const { name,value } = e.target
  setInput((prevInput) => ({...prevInput,[name]:value}))
   // console.log(input)
 }

 const handleLogin = () => {
  LoginApi(input.email,input.password)
  .then((response) =>{
    navigate('/post')
    toast.success("Login Successful")
     setInput({
        email: "", // Clear email field
        password: "" // Clear password field
      });
   // console.log("Logged in", response)
  })
  .catch((error)=> {
    toast("Wrong Email or Password!")
     setInput({
        email: "", // Clear email field
        password: "" // Clear password field
      });
   // console.error("Login error", error)
  })}

 const handleGoogleLogin = async () => {
  try {
   let response = await GoogleSignInApi()
   navigate('/post')
  } catch (error) {
   console.log(error.message)
  }}

  return (
    <div>LoginComponent
     <h1>Sign into Medic Diary</h1>
     <div className= "login-inputs">
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
     </div>
     <button onClick={handleLogin}>click</button>
     <hr className="hr-text" data-content="or"></hr>
     <GoogleButton onClick={handleGoogleLogin}/>
     <p>New to Medic Diary? <Link to="/register">Register Now</Link></p>
   </div>
  )
}