import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-7xl text-black text-center">HOME</h1>
        <p className="text-gray-700">
          This is the home route in our basic Next.js setup.
        </p>
      </div>
    </>
  );
};

export default Home;
