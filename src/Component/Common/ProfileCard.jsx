import "../../Sass/ProfileCard.scss"
export default function ProfileCard({currentUser,onEdit}) {
  return (
  <>
   <div className="profileCard-info">
       <ul className="profileCard-list">
        <li><h3>Name: {currentUser.name}</h3></li>
        <li><p>Email: {currentUser.email}</p></li>
        <li><p>Gender: {currentUser.gender}</p></li>
        <li><p>Age: {currentUser.age}</p></li>
        <li><p>Blood Group: {currentUser.bloodGroup}</p></li>
        <li><p>Phone Number: {currentUser.phoneNumber}</p></li>
        <li><p>NextofKin: {currentUser.nextOfKin}</p></li>
        <li><p>NextofKin Phone Number: {currentUser.nextOfKinPhone}</p></li>
       </ul>
      <div>
      <button onClick={onEdit} className="edit-btn">Edit</button>
     </div>
    </div>
  </>
  )
}