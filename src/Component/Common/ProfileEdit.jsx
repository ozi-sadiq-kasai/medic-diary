import { useState } from "react"
import { editProfile } from "../../Api/FireStoreApi"
import "../../Sass/ProfileEdit.scss"
export default function ProfileEdit({onEdit,currentUser}) {


 const [editInputs,setEditInputs] = useState({})

 const getInput = (event) =>{
 let {name,value} = event.target
 let input = {[name]:value}
  setEditInputs((prevInputs) => ({ ...prevInputs, ...input }));
 }
 const updateProfileData = async() =>{
 await editProfile(currentUser?.id,editInputs)
 await onEdit()
 }
  return (
    <div className="profile-edit">
     <div className="profileEdit-div">  
      <p onClick={onEdit} className="profileEdit-back">Back to Profile</p>
     </div>
    <div className="profileEdit-inputs">
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
     <input
     type="text"
     placeholder="Genotype"
     onChange={getInput}
     name="genotype" />
     <input
     type="text"
     placeholder="Blood Group"
     onChange={getInput}
     name="bloodGroup" />
     <input
     type="phone"
     placeholder="Phone Number"
     onChange={getInput}
     name="phoneNumber" />
     <input
     type="text"
     placeholder="Next of Kin"
     onChange={getInput}
     name="nextOfKin" />
     <input
     type="text"
     placeholder="Next of Kin Phone Number"
     onChange={getInput}
     name="nextOfKinPhoneNumber"/>
      
    </div>
      <button onClick={updateProfileData} className="profileEdit-btn">Save Edit</button>
    </div>
  )
}