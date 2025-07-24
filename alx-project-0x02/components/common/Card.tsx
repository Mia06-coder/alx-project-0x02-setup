import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-3 bg-white border border-stone-200 px-4 py-8 shadow-sm mb-4 max-w-sm rounded-lg">
      <h2 className="text-black text-2xl font-semibold">{title}</h2>
      <p className="text-gray-800 font-light">{content}</p>
    </div>
  );
};

export default Card;
