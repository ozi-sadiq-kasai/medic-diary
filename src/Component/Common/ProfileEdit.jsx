import { useState } from "react"
import { editProfile } from "../../Api/FireStoreApi"

export default function ProfileEdit({onEdit,currentUser}) {


 const [editInputs,setEditInputs] = useState({})

 const getInput = (event) =>{
 let {name,value} = event.target
 let input = {[name]:value}
  setEditInputs((prevInputs) => ({ ...prevInputs, ...input }));
 }
 const updateProfileData = () =>{
 editProfile(currentUser?.id,editInputs)
 }
  return (
    <div>ProfileEdit
     <div>
      <button onClick={onEdit}>Back tO Profile</button>
     </div>
    <div className="Edit-inputs">
       <input 
      type="text"
      placeholder ="Name"
      onChange={getInput}
      name="name"
       />
      <input 
      type="number"
      placeholder="Age"
      onChange={getInput}
      name="age"
       />
     <input
     type="text"
     placeholder="Gender"
     onChange={getInput}
     name="gender" />
      
    </div>
      <button onClick={updateProfileData}>Save Edit</button>
    </div>
  )
}