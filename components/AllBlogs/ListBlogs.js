import React from "react";
import SingleCard from './SingleCard'
import Link from 'next/link'


const ListBlogs = ({posts}) => {
  return (
    <div>
      <section className="h-screen border-t-4 rounded-tr-3xl rounded-tl-3xl text-gray-600 body-font dark:text-gray-300 dark:bg-gray-800 body-font overflow-hidden">
      <div className="mt-10 flex justify-center mx-auto text-3xl font-bold ">
        <div className="pb-3">All Blogs</div>
      </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">

          {posts.map(function(post, idx) {
          return (
            <li key={idx}>
              <Link href={'/blogs/'+post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          )
        })}
        <Link href={'/demo/'}>
                <>BOOM</>
              </Link>
              
            
             <SingleCard>
               
             </SingleCard>
            {/*<SingleCard></SingleCard>
            <SingleCard></SingleCard>
            <SingleCard></SingleCard>
            <SingleCard></SingleCard> */}
            
      
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListBlogs;
