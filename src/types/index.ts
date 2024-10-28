export type TBook = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
};
export type TComment = {
    id: string;
    comment: string;
    postId: string;
};
