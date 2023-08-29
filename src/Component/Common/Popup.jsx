import {onLogout}  from "../../Api/LoginApi"
export default function Popup() {
  return (
    <div className="pop-up">
     <p onClick={onLogout}>popup</p>
     </div>
  )
}