import { getAuth, signOut } from "firebase/auth";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { AppContext } from "../context/AppContext";
import { FirebaseApp } from "../firebase/firebase.config";
import { Account } from "./Account";
import { Burger } from "./Burger";
import ImageModal from "./ImageModal";

type Header = {
  arrayImages: Array<object | null>;
  setArrayImages: Function;
  email: string;
};

const auth = getAuth(FirebaseApp);

export const Header = ({ arrayImages, setArrayImages, email }: Header) => {
  return (
    <header className="w-full mb-12 bg-gray-900 ">
      {email ? (
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand>
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={
                    "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  }
                  rounded={true}
                />
              }>
              <Dropdown.Header>
                <span className="block truncate text-sm font-medium">
                  {email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item
                onClick={() => signOut(auth)}
                className="text-red-600">
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Brand>
          <ImageModal
            arrayImages={arrayImages}
            setArrayImages={setArrayImages}
            email={email}
          />
        </Navbar>
      ) : (
        <h1>Login to start</h1>
      )}
    </header>
  );
};
