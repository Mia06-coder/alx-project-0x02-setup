import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white font-medium py-4 px-8 shadow-md">
      <nav className="flex justify-center items-center">
        <ul className="flex justify-center items-center gap-12">
          <li>
            <Link href="./home">HOME</Link>
          </li>
          <li>
            <Link href="./about">ABOUT</Link>
          </li>
          <li>
            <Link href="./posts">POSTS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
