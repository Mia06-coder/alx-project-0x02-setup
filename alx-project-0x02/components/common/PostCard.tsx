import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId, id }) => {
  return (
    <div className="flex flex-col justify-between bg-white border border-stone-200 px-4 py-8 shadow-sm  w-[320px]  rounded-lg ">
      <div className="flex flex-col gap-3">
        <h2 className="text-lg  text-black font-bold uppercase">{title}</h2>
        <p className="text-sm text-gray-800 font-normal">{content}</p>
      </div>

      <div className="flex justify-between items-center mt-4 text-xs text-gray-500 font-light">
        <span>userId: {userId}</span>
        <span>post: {id} </span>
      </div>
    </div>
  );
};
export default PostCard;
