import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-7xl text-black text-center">ABOUT</h1>
        <p className="text-gray-700">
          This is the about route in our basic Next.js setup.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-10">
          <Button size="small" shape="rounded-sm" />
          <Button size="medium" shape="rounded-md" />
          <Button size="large" shape="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default About;
