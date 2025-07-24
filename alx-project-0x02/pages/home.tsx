import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      title: "Lorem Ipsum",
      content:
        "Accusantium perspiciatis eveniet reiciendis explicabo architecto. Adipisci repellat iure harum error saepe maiores, aspernatur obcaecati.",
    },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-7xl text-black text-center">HOME</h1>
        <p className="text-gray-700 mb-4">
          This is the home route in our basic Next.js setup.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-4 bg-blue-500 px-4 py-2 rounded-full text-white font-semibold mb-6"
        >
          Add New Post
        </button>

        <div className="flex gap-6 justify-center items-center flex-wrap mt-8">
          {" "}
          {modalOpen && (
            <PostModal
              onClose={() => setModalOpen(false)}
              onSubmit={handleAddPost}
            />
          )}
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
          <Card
            title="Getting Started"
            content="This is a reusable card component. You can pass any content you like."
          />
          <Card
            title="Reusable Component"
            content="You can reuse this card for different sections of your website."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
