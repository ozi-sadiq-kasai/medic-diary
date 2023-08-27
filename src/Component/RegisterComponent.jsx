import { RegisterApi } from "../Api/LoginApi"
import { useState } from "react"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
 const navigate = useNavigate();
 const [input,setInput] = useState({email:"",password:""})

 const handleInputChange = (e) =>{
  const {name,value} = e.target
  setInput((prevInput) =>({...prevInput,[name]:value}))
 }

 const handleRegister= async() => {
 try {
  let response = await  RegisterApi(input.email,input.password)
  
  setInput({
   email: "", // Clear email field
   password: "" // Clear password field
   });
   navigate('/post')
  toast.success('Account Created!')
 } catch (error) {
    setInput({
        email: "", // Clear email field
        password: "" // Clear password field
      });
  toast.error('Cannot Create your Account')
 }}


  return (
    <div>RegisterComponent
     <div className="login-inputs"> 
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
     <button onClick={handleRegister}> Register Now</button>
    </div>
    
  )
}
export default RegisterComponent