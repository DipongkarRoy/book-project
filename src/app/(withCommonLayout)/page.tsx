import Banner from "@/components/banner/Banner";
import LatestPosts from "@/components/latestPosts/LatestPosts";
import getAllPosts from "@/services/postServices";



const page = async () => {
  const posts = await getAllPosts();
  //console.log(posts);
  return (
    <div>
      <Banner/>
      <LatestPosts posts={posts}/>
    </div>
  );
};

export default page;