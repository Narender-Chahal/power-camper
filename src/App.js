import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import HeaderSection from "./components/HeaderSection";
import RatingSection from "./components/RatingSection";
import ComentSection from "./components/ComentSection";
import OverviewSection from "./components/OverviewSection";
function App() {
  return (
    <>
      <div className="bg_img  vh_xxl_100 ">
        <MyNav />
        <HeaderSection />
      </div>

      <div className="bg_img1 pb_100 ">
        <RatingSection />
        <ComentSection />
      </div>
      <OverviewSection />
    </>
  );
}

export default App;
