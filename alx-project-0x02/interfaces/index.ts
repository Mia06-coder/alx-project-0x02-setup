export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
  id: number;
  userId: number;
  title: string;
  content: string;
}

export interface RawPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
