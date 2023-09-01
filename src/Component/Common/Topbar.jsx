import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../../Sass/Topbar.scss"
import { AiOutlineHome } from "react-icons/ai"
import { RxPerson } from "react-icons/rx"
import { BiLogOut } from "react-icons/bi"
import logo from "../../assets/logo.png"
import {onLogout}  from "../../Api/LoginApi"


export default function Topbar({currentUser}) {
 const [popupVisible,setPopupVisible] = useState(false)
 let navigate = useNavigate()

  return (
    <div className="topbar-main">
     <img src={logo} alt="logo" className="logo"/>
     <h3 className="topbar-name">Welcome {currentUser.name}</h3>
     <div className="icons">
      <AiOutlineHome
       size={27}
       onClick={()=>{navigate('/post')}}
       className="icon"/>
      <RxPerson 
        size={24}
        onClick={()=>{navigate("/profile")}}
        className="icon"/>
       <BiLogOut
       size={27}
       className="icon"
       onClick={onLogout}
       />
     </div>
    </div>
  )
}