import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import HeaderSection from "./components/HeaderSection";
function App() {
  return (
    <>
      <div className="bg_img vh-100 ">
        <MyNav />
        <HeaderSection />
      </div>
    </>
  );
}

export default App;
