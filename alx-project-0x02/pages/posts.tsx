import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center p-4 max-w-[1100px] ml-auto mr-auto">
        <h1 className="text-7xl text-black text-center ">POSTS</h1>
        <p className="text-gray-700">
          This is the posts route in our basic Next.js setup.
        </p>

        <div className="flex justify-center flex-wrap gap-6 mt-12 ">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();
  return { props: { posts } };
}

export default Posts;
