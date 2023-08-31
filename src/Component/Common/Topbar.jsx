import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../../Sass/Topbar.scss"
import { AiOutlineHome } from "react-icons/ai"
import { RxPerson } from "react-icons/rx"
import Popup from "./Popup"
import { BiLogOut } from "react-icons/bi"
import logo from "../../assets/logo.png"



export default function Topbar({currentUser}) {
 const [popupVisible,setPopupVisible] = useState(false)
 let navigate = useNavigate()

 const displayPopup = () =>{
  setPopupVisible(!popupVisible)
 }
  return (
    <div className="topbar-main">
      {
       popupVisible ?(<div className="popup-position"><Popup/></div>):(<></>)
      }
     <img src={logo} alt="logo" className="logo"/>
     <h3>Welcome {currentUser.name}</h3>
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
       onClick={displayPopup}
       className="icon"
       />
     </div>
    </div>
  )
}