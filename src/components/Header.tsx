import { AppContext } from "../context/AppContext";
import { FirebaseApp } from "../firebase/firebaseApp";
import { Account } from "./Account";
import { Burger } from "./Burger";

type HeaderProps = {
  email: string;
};

export const Header = ({ email }: HeaderProps) => {
  return (
    <header className="Header flex flex-row  justify-between items-center relative mt-10  mb-20 w-3/4 ">
      {email ? (
        <>
          <Account email={email} />
          <Burger />
        </>
      ) : (
        <h1 className="w-full my-8 text-center ">
          Login To start {"o((>ω< ))o"}
        </h1>
      )}
    </header>
  );
};
