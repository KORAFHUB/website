import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { postDocument } from "../../constants";
import  DOMPurify from 'dompurify';





const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { error, loading, data } = useQuery(postDocument, { variables: { id } });



  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  if (loading) return (
    <div className={`bg-primary ${styles.flexCenter}`}>
      <h1>loading ...</h1>
    </div>
  );
  if (error) return (
    <div className={`bg-primary w-full overflow-hidden`}>
      <div className='place-content-center'>

      <h1>failed to fetch blog</h1>
      </div>
    </div>
  );

  return (
    Object.keys(posts).map((obj, i) => {
      console.log(posts[obj].content.html)
      return (
      <div className="header bg-primary">
        <button onClick={() => navigate(-1)} className={`py-4 px-4 text-white bg-purple-700 rounded-[10px] mt-5 ml-5`}>Go back</button>

        <div className={`main container ${styles.paddingX} ${styles.marginX} ${styles.paddingY}`}>
          <h5 className={styles.heading2}>{posts[obj].title}</h5>
         
          <a href="" className='text-white'>
            {posts[obj].author.name}
          </a>
          <figure className={`${styles.paddingX} ${styles.paddingY}`}>
            <img src={posts[obj].coverImage.url} />
          </figure>
          <div className="pl-0 col-md-12 pt-2">
            { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(posts[obj].content.html) }} /> }
          </div>
        </div>
      </div>
      )

    })
  );
}







export default Post;
