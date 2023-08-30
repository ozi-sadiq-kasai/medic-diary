
export default function ProfileCard({currentUser,onEdit}) {
 
  return (
  <>
   <div>
     <div>
      <button onClick={onEdit}>Edit</button>
     </div>
     <h3>{currentUser.name}</h3>
     <p>{currentUser.email}</p>
    </div>
  </>
  )
}