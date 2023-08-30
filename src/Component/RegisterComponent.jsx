import { RegisterApi } from "../Api/LoginApi"
import { useState } from "react"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { postUserData } from "../Api/FireStoreApi";

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
  toast.success('Account Created!')
  // send data to user collection in firestore
  postUserData({name:input.name,email:input.email,})
  localStorage.setItem("userEmail",response.user.email)
  setInput({
   name:"",
   email: "", 
   password: ""
   });
  navigate('/post')
  
  } catch (err) {
    setInput({
        name:"",
        email: "", 
        password: "" 
      });
     toast.error('Cannot Create your Account')
     }
    }



  return (
    <div>RegisterComponent
     <div className="login-inputs"> 
      <input 
       type="text"
       name="name"
       placeholder="Enter FullName"
       onChange={handleInputChange}
       value={input.name}
       />
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