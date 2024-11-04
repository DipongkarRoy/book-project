import { getComments } from "@/services/comments";
import { TBook } from "@/types";
import Image from "next/image";
import Comments from "./Comments";

const PostCardDetails = async ({ post }: { post: TBook }) => {
  const comments = await getComments(post.id);
  

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image src={post.image} alt="book image" width={300} height={300} />
      </figure>
      <div className="p-12">
        <div className="flex justify-between mb-4">
          <h2 className="card-title">{post.name}</h2>
          <div className="badge p-4 bg-fuchsia-500">{post.category}</div>
        </div>
        <p>{post.description}</p>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default PostCardDetails;
