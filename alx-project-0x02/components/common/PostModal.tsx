import { PostModalProps } from "@/interfaces";
import { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    onClose();
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1000 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-[400px] w-full">
        <h2 className="text-[1.5rem] text-center font-medium mb-5">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-[#e2e2e2] rounded-sm"
          />
          <textarea
            placeholder="Enter content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full h-25 p-2 border border-[#e2e2e2] rounded-sm"
          />
          <div className="mt-4 flex gap-4 justify-center items-center">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-neutral-500 text-white border-0 rounded-full cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-[#0070f3] text-white border-0 rounded-full cursor-pointer"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
