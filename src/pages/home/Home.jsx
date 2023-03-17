import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import Intro from "./Intro";
import PopularDeals from "./PopularDeals";
import Explore from "./Explore";
import Form from "./Form";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      {/* TopBar: 8vh; NavBar: 6vh */}
      <TopBar />
      <div className="h-[8vh]" />
      <NavBar />
      <Intro />
      <PopularDeals />
      <Explore />
      <div className="h-[10vh] bg-darkColor"></div>
      <Form />
      <Footer />
    </>
  );
}

export default Home;
