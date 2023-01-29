import { Account } from "./Account";
import { Burger } from "./Burger";

export const Header = () => {
  return (
    <header className="Header flex flex-row  justify-between items-center relative mb-20 w-3/4 ">
      <Account />
      <Burger />
    </header>
  );
};
