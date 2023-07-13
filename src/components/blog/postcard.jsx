import styles, { layout } from "../../style";
import { discount, robot } from "../../assets";
import { Link } from "react-router-dom";



export const PostCard = ({ post }) => (
  // <div>
  //   {post.map((ob, i) => {
  //     return (
<Link to={`/post/${post.id}`} >
<article  className="flex max-w-xl flex-col items-start justify-between">
<div className="flex items-center gap-x-4 text-xs">
  <time dateTime="2020-03-16" className="text-white">{post.date}</time>
  <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{post.tag}</div>
</div>
<div className="group relative">
  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
    
      <span className="absolute inset-0"></span>
      {post.title}
    
  </h3>
  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{post.excerpt}</p>
</div>
<div className="relative mt-8 flex items-center gap-x-4">
  <img src={post.author.picture.url} alt="" className="h-11 w-10 rounded-full bg-gray-50"/>
    <div className="text-sm leading-6">
      <p className="font-semibold text-white">
       
          <span className="absolute inset-0"></span>
          {post.author.name}
        
      </p>
      <p className="text-gray-400">{post.author.title}</p>
    </div>
</div>
</article>
</Link>
    );
//     })}
//   </div>
// );



