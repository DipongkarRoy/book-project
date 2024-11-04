import { delay } from "@/components/utils/delay";
import { TBook } from "@/types";

export const getAllPosts = async (type?: string, wait=false) => {
  let fetchOptions = {};

  if (type === "ssr") {
    fetchOptions = {
      cache: "no-store",
    };
  } else if (type === "isr") {
    fetchOptions = {
      next: {
        revalidate: 30,
      },
    };
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
    fetchOptions
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch posts.`);
  }

  if (wait) {
    delay(2000);
  }
  return res.json();
};


export const getPost = async (id: string, wait=false) => {
 
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,);
  if (!res.ok) {
    throw new Error(`Failed to fetch data post.`);
  }

  if (wait) {
    delay(2000);
  }
  return res.json();
};

export const createPostData = async (post: TBook) => {
  const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/posts`,{
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post),
    cache:'no-cache'
  })
  if (!res.ok) {
    throw new Error(`Failed to create post.`);
  }

  return res.json();
}

