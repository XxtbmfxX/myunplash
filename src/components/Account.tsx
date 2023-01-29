import Face from "../assets/face.jpg";
export const Account = () => {
  return (
    <div className="Account flex flex-row ">
      <img src={Face} className="w-10 h-10 object-cover rounded-lg " />
      <div className="Acc_text flex flex-col ">
        <span className="text-bold">My Unsplash</span>
        <span className="text-bold">devchallenges.io</span>
      </div>
    </div>
  );
};
