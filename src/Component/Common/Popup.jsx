import {onLogout}  from "../../Api/LoginApi"
import "../../Sass/Popup.scss"
export default function Popup() {
  return (
    <div className="popup-card">
     <p className="pop-up" onClick={onLogout}>popup</p>
     </div>
  )
}