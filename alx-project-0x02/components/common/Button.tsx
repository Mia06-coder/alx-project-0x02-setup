import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
  let sizeClass = "";

  switch (size) {
    case "small":
      sizeClass = "px-2 py-1 text-sm";
      break;
    case "medium":
      sizeClass = "px-4 py-2 text-md";
      break;
    case "large":
      sizeClass = "px-6 py-3 text-lg";
      break;
  }
  return (
    <button
      className={` bg-blue-500 text-white ${sizeClass} ${shape} hover:bg-blue-700 transition duration-300`}
    >
      Button Title
    </button>
  );
};

export default Button;
