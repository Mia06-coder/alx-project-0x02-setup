import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <h2 className="text-9xl font-semibold text-black">Welcome!</h2>
      </main>
    </>
  );
};

export default Home;
