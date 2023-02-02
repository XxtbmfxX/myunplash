import { AppContext } from "../context/AppContext";
import { FirebaseApp } from "../firebase/firebase.config";
import { Account } from "./Account";
import { Burger } from "./Burger";

type HeaderProps = {
  email: string;
};

export const Header = ({ email }: HeaderProps) => {
  return (
    <header
      className={`Header flex flex-row text-yellow-50 justify-between items-center relative mt-10  mb-20 w-5/6 animate-bounce  ${
        email && "animate-none"
      } `}>
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
