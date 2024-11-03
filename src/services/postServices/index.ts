const getAllPosts = async (type:string) => {

  let fetchOptions ={}

  if(type==="ssr"){
    fetchOptions ={
      cache:'no-store'
    }
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, fetchOptions);
  if (!res.ok) {
    throw new Error(`Failed to fetch posts.`);
  }
  return await res.json();
};

export default getAllPosts;
