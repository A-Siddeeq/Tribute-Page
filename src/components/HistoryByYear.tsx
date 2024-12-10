const HistoryByYear = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="bg-[url('./assets/headshot.jpg')] bg-cover w-1/2 bg-no-repeat"></div>
        {/*BRIEF BIO.*/}
        <div className="flex flex-col justify-between h-screen font-outfit w-1/2">
          <div></div>
          <div className="px-2">
            <h1 className="font-anton text-3xl text-gray-800">
              The Director,{" "}
              <abbr title="Bureau of public Enterprises">BPE</abbr>
            </h1>
            <p className="text-black text-lg break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              amet itaque illum, perferendis alias voluptate, molestias debitis
              eveniet quia repellat nisi possimu s sint recusandae iure, sed
              maiores modi. Mollitia, deserunt!
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HistoryByYear;
