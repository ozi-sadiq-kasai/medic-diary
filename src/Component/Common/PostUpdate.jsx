import { useState } from 'react';
import { PostPost } from "../../Api/FireStoreApi"
import '../../Sass/PostUpdate.scss'
import ModalComponent from "./Modal"

export default function PostUpdate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState("");

  // send post to firebase
  const sendPost = async ()=>{
   await PostPost(post)
   await setModalOpen(false)
   await setPost("")
  }
  return (
    <div className= "postupdate-main">
     <div className="post-update">
      <button className="postupdate-button" onClick={() => setModalOpen(true)}>How is your health today?</button>
     </div>
     <ModalComponent
      setPost={setPost} 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      post={post}
      sendPost={sendPost}/>
    </div>
  )
}