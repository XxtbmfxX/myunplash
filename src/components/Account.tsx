import Face from "../assets/face.jpg";

type AccountProps = {
  email: string;
};

export const Account = ({ email }: AccountProps) => {
  return (
    <div className="Account flex flex-row ">
      <img src={Face} className=" mr-2 w-10 h-10 object-cover rounded-lg " />
      <div className="Acc_text flex flex-col ">
        <span className="text-bold">My Unsplash</span>
        <span className="text-bold">{email ? email : ""}</span>
      </div>
    </div>
  );
};
