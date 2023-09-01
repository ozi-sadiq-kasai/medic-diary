import '../../Sass/PostCard.scss'
import { BiTrash } from 'react-icons/bi';
import { deletePost } from '../../Api/FireStoreApi';

export default function PostCard({posts,currentUser}) {
   const formattedDate = new Date(posts.timeStamp).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
   <div className="post-card">
    <div className="postCard-time">
     <p className="postCard-name">{currentUser.name}</p>
     <p className="postCard-date">{formattedDate}</p>
     <BiTrash onClick={() => deletePost(posts.id)} style={{cursor:"pointer"}}/>
    </div>
    <p className="postCard-post">Blood Pressue: {posts.bloodPressure}</p>
    <p className="postCard-post">Blood Sugar Level: {posts.bloodSugar}</p>
    <p className="postCard-post">Doctor's Diagnosis: {posts.post}</p>
    <p className="postCard-post">Medication: {posts.prescription}</p>
    </div>
   
   
  )
}
