import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps, RawPost } from "@/interfaces";

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
          {posts.map((post, key: number) => (
            <PostCard key={key} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!result.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data: RawPost[] = await result.json();

  const posts: PostProps[] = data.map((post) => ({
    id: post.id,
    userId: post.userId,
    title: post.title,
    content: post.body, // renaming 'body' to 'content'
  }));

  return { props: { posts } };
}

export default Posts;
