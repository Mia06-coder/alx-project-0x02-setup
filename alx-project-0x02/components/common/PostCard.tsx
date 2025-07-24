import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="flex flex-col justify-between bg-white border border-stone-200 px-4 py-8 shadow-sm  w-[320px]  rounded-lg ">
      <div className="flex flex-col gap-3">
        <h2 className="text-lg  text-black font-bold uppercase">{title}</h2>
        <p className="text-sm text-gray-800 font-normal">{body}</p>
      </div>
      <span className="text-xs text-gray-500 font-light text-right">
        userId: {userId}
      </span>
    </div>
  );
};
export default PostCard;
