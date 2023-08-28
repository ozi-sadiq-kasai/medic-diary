// import { Divider } from 'antd'
import '../../Sass/PostCard.scss'
export default function PostCard({posts}) {
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

    <p>{posts.post}</p>
     <p>{formattedDate}</p>
    </div>
   
   
  )
}
