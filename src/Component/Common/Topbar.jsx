import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../../Sass/Topbar.scss"
import { AiOutlineHome } from "react-icons/ai"
import { RxPerson } from "react-icons/rx"
import Popup from "./Popup"
import { BiLogOut } from "react-icons/bi"




export default function Topbar() {
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
     <h1 className="logo">Medic-Diary</h1>
     <div className="icons">
      <BiLogOut
       size={33}
       onClick={displayPopup}/>
      <AiOutlineHome
       size={33}
       onClick={()=>{navigate('/post')}}/>
      <RxPerson 
        size={30}
        onClick={()=>{navigate("/profile")}}/>
     </div>
    </div>
  )
}