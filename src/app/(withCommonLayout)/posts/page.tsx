import PostCard from "@/components/ui/PostCard";
import { getAllPosts } from "@/services/postServices";

import { TBook } from "@/types";


const AllPostPages = async() => {
    const posts = await getAllPosts("ssr" ,true);

    return (
        <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-4xl text-center">
        Latest <span className="text-fuchsia-800">Posts</span>
      </h1>
      <p className="text-gray-400 text-center italic w-2/4 mx-auto mt-2">
        Discover, review, and rate your favorite books. Join a community of book
        lovers and share your reading experiences.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-4 md:px-4 mb-6'>
        {posts.map((post:TBook) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </div>
    );
};

export default AllPostPages;