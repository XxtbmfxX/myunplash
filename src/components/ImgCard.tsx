type AppProps = {
  image: string;
};

export const ImgCard = ({ image }: AppProps) => {
  return (
    <>
      <img
        src={image}
        className="w-full h-full object-cover"
        alt="your-image"
      />
      {/* <div
        className="ImgCard h-auto w-full"
        style={{ backgroundImage: `url(${image})` }}>
        a
      </div> */}
    </>
  );
};
