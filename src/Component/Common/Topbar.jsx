import { useNavigate } from "react-router-dom"
import "../../Sass/Topbar.scss"
import { AiOutlineHome } from "react-icons/ai"
import { RxPerson } from "react-icons/rx"


export default function Topbar() {
 let navigate = useNavigate()
  return (
    <div className="topbar-main">
     <h1 className="logo">Medic-Diary</h1>
     <div className="icons">
      <AiOutlineHome size={33} onClick={()=>{navigate('/post')}}/>
      <RxPerson size={30} onClick={()=>{navigate("/profile")}}/>
     </div>
    </div>
  )
}