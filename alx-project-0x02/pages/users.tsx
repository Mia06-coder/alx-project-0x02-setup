import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

const Users = ({ users }: { users: UserProps[] }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center p-4 max-w-[1100px] ml-auto mr-auto">
        <h1 className="text-7xl text-black text-center">USERS</h1>
        <p className="text-gray-700">
          This is the users route in our basic Next.js setup.
        </p>

        <div className="flex justify-center flex-wrap gap-6 mt-12">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
