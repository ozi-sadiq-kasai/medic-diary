import PostUpdate from "./Common/PostUpdate"

export default function PostComponent({currentUser}) {
  return (
    <div>
     <PostUpdate currentUser={currentUser}/>
    </div>
  )
}