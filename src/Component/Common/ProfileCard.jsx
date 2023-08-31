
export default function ProfileCard({currentUser,onEdit}) {
 
  return (
  <>
   <div>
     <div>
      <button onClick={onEdit}>Edit</button>
     </div>
     <h3>Name: {currentUser.name}</h3>
     <p>Email: {currentUser.email}</p>
     <p>Age: {currentUser.age}</p>
     <p>Gender: {currentUser.gender}</p>
 
    </div>
  </>
  )
}