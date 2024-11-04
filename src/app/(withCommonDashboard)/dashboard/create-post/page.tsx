import { createPostData, getAllPosts } from "@/services/postServices";
import { TBook } from "@/types";

const createPost = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const postId = await getAllPosts();
    const bookInfo = {
      id: JSON.stringify(postId.length + 1),
      name: formData.get("name"),
      description: formData.get("description"),
      category: formData.get("category"),
      image: formData.get("image"),
    };

    try {
      const res = await createPostData(bookInfo as TBook);
      if (res) {
        console.log("Post created successfully.");
      }
    } catch (err) {
      console.error(err);

    }
    console.log(bookInfo);
  };
  return (
    <div className=" w-2/3 px-5 rounded-md bg-[#F1FFEF] shadow-2xl mt-16 md:mt-5">
      <h1 className="text-center text-4xl">
        Add Your <span className="text-fuchsia-900">Book Review</span>
      </h1>
      <form action={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book name</span>
          </label>
          <input
            name="name"
            type="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            name="description"
            type="description"
            placeholder="description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">category</span>
          </label>
          <input
            name="category"
            type="category"
            placeholder="category"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">image</span>
          </label>
          <input
            name="image"
            type="url"
            placeholder="image"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-[#BCD1E7]">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default createPost;
