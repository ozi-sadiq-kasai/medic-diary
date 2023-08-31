import PostUpdate from "./Common/PostUpdate"
import "../Sass/PostComponent.scss"
export default function PostComponent({currentUser}) {
  return (
    <div className="postComp-main">
     <PostUpdate currentUser={currentUser}/>
    </div>
  )
}