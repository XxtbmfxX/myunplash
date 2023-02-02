type AccountProps = {
  email: string;
};

export const Account = ({ email }: AccountProps) => {
  return (
    <div className="Account flex flex-row ">
      <span className="material-symbols-outlined mr-4 flex items-center ">
        person_4
      </span>
      <div className="Acc_text flex flex-col ">
        <span className="text-bold">My Unsplash</span>
        <span className="text-bold">{email ? email : ""}</span>
      </div>
    </div>
  );
};
