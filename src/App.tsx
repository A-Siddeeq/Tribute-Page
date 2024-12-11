import HistoryByYear from "./components/HistoryByYear";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import bpe from "./assets/bpe.jpeg";
import fct from "./assets/fct.jpeg";
import pic from "./assets/headshot.jpg";

function App() {
  return (
    <>
      <LandingPage />
      <HistoryByYear
        imgSrc={bpe}
        heading="The Director, BPE"
        info="In November 1999, Obasanjo appointed El-Rufai as the inaugural director of the Bureau of Public Enterprises, and secretary of the National Council of Privatisation where he spear-headed the privatisation of several government owned corporations alongside Vice President Atiku Abubakar."
      />
      <HistoryByYear
        imgSrc={fct}
        heading="Minister, FCT"
        info="As FCT Minister, el-Rufai came to be known as “Mr Demolition” for his policy of forced evictions and demolitions of buildings and settlements in the capital city  in an effort to restore Abuja to its original master plan
        He restored Abuja to the dream of its founders, gave Nigeria its first computerised land registry and made it possible for ordinary Nigerians, 27,000 of them, to own land in Abuja once they followed simple, but clear, procedures."
      />{" "}
      <HistoryByYear
        imgSrc={pic}
        heading="Governor, Kaduna State"
        info={`The improvement his administration brought about has made notable changes in the state, including but not limited to: \n
Introduced the kaduna Urban Renewal Project which foresaw(forsees) the Urbanisation of various infrastructure in the state, \n
Launched the school feeding programme which provides a free meal to students per day, \n
Renovated various schools, sports centers and facilities to higher levels, \n
Adopting the TSA Policy`}
      />
      <Footer />
    </>
  );
}

export default App;
