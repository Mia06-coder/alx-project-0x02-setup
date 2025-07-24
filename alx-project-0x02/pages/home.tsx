import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-7xl text-black text-center">HOME</h1>
        <p className="text-gray-700 mb-8">
          This is the home route in our basic Next.js setup.
        </p>
        <Card
          title="Getting Started"
          content="This is a reusable card component. You can pass any content you like."
        />
        <Card
          title="Reusable Component"
          content="You can reuse this card for different sections of your website."
        />
      </div>
    </>
  );
};

export default Home;
