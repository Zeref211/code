import "./../css/App.css";
import Footer from "./Footer";
import Header from "./Header";
import Shop from "./Chitiet";
import Contact from "./Contact";
import Chitiet from "./Chitiet";
import Dieuhuong from "../Router/Dieuhuong";


function PageHome() {
  return (
    <div className="PageHome">
      <Header />
      {/* <Shop/> */}
      {/* <Chitiet/> */}
      {/* <Contact/> */}
      {/* <Dieuhuong/> */}
      <Footer />
    
    </div>
  );
}

export default PageHome;
