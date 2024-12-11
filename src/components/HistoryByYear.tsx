interface Props {
  imgSrc: string | undefined;
  heading: string;
  info: string;
}

const HistoryByYear = ({ imgSrc, heading, info }: Props) => {
  return (
    <>
      <div className="flex w-full">
        <div
          style={{ backgroundImage: `url(${imgSrc})` }}
          className={`bg-cover w-1/2 bg-no-repeat`}
        ></div>
        {/*BRIEF BIO.*/}
        <div className="flex flex-col justify-between h-screen font-outfit w-1/2">
          <div></div>
          <div className="px-2">
            <h1 className="font-anton text-3xl text-gray-800">{heading}</h1>
            <p className="text-black text-lg break-all">{info}</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HistoryByYear;
