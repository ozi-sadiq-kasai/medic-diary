import React, { useState } from "react";
import ProfileCard from "./Common/ProfileCard";
import ProfileEdit from "./Common/ProfileEdit";

export default function ProfileComponent({ currentUser }) {
 const [isEdit,setIsEdit] = useState(false)

 const onEdit = () => {
  setIsEdit(!isEdit)
 }
  return (
    <div className="profileComp-main">
      {isEdit ?(<ProfileEdit onEdit={onEdit} currentUser={currentUser}/>)  : (<ProfileCard currentUser={currentUser} onEdit={onEdit}/>)}
    </div>
  );
}
