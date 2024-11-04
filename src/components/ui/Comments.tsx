import { TComment } from "@/types";

const Comments = ({comments} :{comments:TComment[]}) => {
    return (
        <div className=" mt-5">
            <h4 className="text-3xl text-purple-400 mb-5">Comments:</h4>
            {
            comments.map((data)=><li key={data.id}>{data.comment}</li>)
            }
        </div>
    );
};

export default Comments;