import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { PostCard } from "./postcard";
import { blogdocument, blogvalue } from "../../constants";
import styles from "../../style";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";





function Blog() {
  const [posts, setPosts ] = useState([])
  const { error, loading, data } = useQuery(blogdocument);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

console.log(posts)


  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>



          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">From the blog</h2>
                <p className="mt-2 text-lg leading-8 text-gray-400">Learn how to grow your business with our expert advice.</p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
         
              
            {
              Object.keys(posts).map((value,i)=>{
                return(
                posts[value].map((value,i) => <PostCard key={i} post={value} />)
                )
              })
            
            }
          

              </div>
            </div>
          </div>


          <Footer />
        </div>
      </div>
    </div>
  );

}



//https://codepen.io/ahmetaksungur/pen/dyYVeGP
//https://twitter.com/georgeselkhoury/status/1650228229976858627?s=20

export default Blog;


