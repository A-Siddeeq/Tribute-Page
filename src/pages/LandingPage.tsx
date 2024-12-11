import react from "../assets/react.svg";
import ts from "../assets/typescript.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden justify-between bg-[url('./assets/stateHouse.jpg')] bg-cover w-full bg-no-repeat h-screen">
        <div className="flex justify-center py-2">
          <div className="flex justify-around items-center w-full">
            {/* REACT + TS LOGO */}
            <div className="flex flex-col bg-gray-700 p-1">
              <div>
                <img src={react} alt="React Logo" width={"24px"} />
              </div>
              <div className="flex items-center">
                <p className="text-blue-500 2xl"> + </p>
                <img src={ts} alt="Typescript Logo" width={"20px"} />
              </div>
            </div>
            {/* MID TEXT */}
            <div className="text-center inline-block">
              <p className="font-anton text-2xl">AS - SIDDEEQ</p>
              <span>creations</span>
            </div>
            {/*CREATOR SOCIALS */}
            <div>
              <ul className="flex">
                {/*SHARE ICON*/}
                <li>
                  <a href="">
                    <FaRegShareSquare className="w-6 md:w-12 h-6 md:h-8" />
                  </a>
                </li>
                {/*SEPERATING LINE ICON*/}
                <li>
                  <a href="">
                    <FaGripLinesVertical className="w-6 md:w-12 h-6 md:h-8" />
                  </a>
                </li>
                {/*GITHUB ICON*/}
                <li>
                  <a href="">
                    <FaGithub className="w-6 md:w-12 h-6 md:h-8" />
                  </a>
                </li>
                {/*X ICON*/}
                <li>
                  <a href="">
                    <FaXTwitter className="w-6 md:w-12 h-6 md:h-8" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*BRIEF BIO.*/}
        <div className="flex flex-col text-center font-outfit">
          <div>
            <h1 className="font-anton text-2xl md:text-3xl text-gray-100">
              Mal. Nasir Ahmad El - Rufai
            </h1>
            <h2 className="text-gray-50">
              <q>
                <i>
                  When you are in charge, you have no time for blame or trying
                  to find excuses, you should do what you can
                </i>
              </q>
            </h2>
          </div>
          <div className="flex justify-center">
            <hr className="w-48" />
          </div>
          <p className="text-white text-lg">
            Born 16<sup>th</sup> February 1960 is a Nigerian Politician,
            innovator and visionary leader. He is the Former and 22nd Executive
            Governor of Kaduna State. El-Rufai, as he is commonly called had
            served as the Director of the
            <abbr title="Bureau of public Enterprises">BPE</abbr> the Minister
            of the Federal Capital Territory where he made significant
            contributions to the Nation that till today, his accomplihments are
            still present, and the Governor of Kaduna State where improvement
            his administration brought about has made notable changes in the
            state.
          </p>
        </div>
        <div>
          <p className="text-right text-white font-outfit text-[12px] md:text-[14px] px-1">
            All historical stories, postions and contributions are from verified
            sorces
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
