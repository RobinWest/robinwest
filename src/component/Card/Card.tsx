import { card } from "./Card.css";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={`${card()}`}>{children}</div>;
};
