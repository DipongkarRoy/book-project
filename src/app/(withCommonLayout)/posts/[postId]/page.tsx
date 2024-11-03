import PostCardDetails from "@/components/ui/PostCardDetails";
import { getPost } from "@/services/postServices";

type TProps = {
  params: {
    postId: string;
  };
};

const singlePost = async ({ params }: TProps) => {
    const post = await getPost(params.postId);
  return (
    <div className="p-5">
      <PostCardDetails post ={post} />
    </div>
  );
};

export default singlePost;
