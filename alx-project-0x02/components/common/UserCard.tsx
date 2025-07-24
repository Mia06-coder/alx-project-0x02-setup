import { UserProps } from "@/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-black mb-1">{name}</h2>
        <p className="text-sm text-gray-700">@{username}</p>
      </div>
      <p className="text-sm text-gray-800 mt-2">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-700" />
        {email}
      </p>
      <p className="text-sm text-gray-800">
        <FontAwesomeIcon icon={faMap} className="mr-2 text-gray-700" />
        {address.street}, {address.suite} {address.city} {address.zipcode}
      </p>
      <p className="text-sm text-gray-800">
        <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-700" />
        {phone}
      </p>
      <p className="text-sm text-blue-500 underline">
        <FontAwesomeIcon icon={faGlobe} className="mr-2 text-gray-700" />
        {website}
      </p>
      <p className="text-sm text-gray-600 mt-4 italic">
        {company.name} - {company.catchPhrase} - {company.bs}
      </p>
    </div>
  );
};

export default UserCard;
