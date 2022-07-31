import "./App.css";
import Header from "./components/Header";
import HeaderM from "./components/HeaderM";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Pungsa from "./components/Pungsa";
import Jokbo from "./components/Jokbo";
import Profile from "./components/Profile";
import Board from "./components/Board";
import Pungmul from "./components/Pungmul";
import Kkwaenggwari from "./components/Kkwaenggwari";
import Janggu from "./components/Janggu";
import Drum from "./components/Drum";
import Jing from "./components/Jing";
import Sogo from "./components/Sogo";
import history from "./components/history";
import popup from "./components/popup";
import Main from "./components/Main";
import MainM from "./components/MainM";
import UploadNotice from "./components/UploadNotice";
import UploadBoard from "./components/UploadBoard";

import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import AboutM from "./components/AboutM";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <>
      {isMobile ? <HeaderM /> : <Header />}
      {isMobile ? (
        <Route path="/" exact={true} component={MainM} />
      ) : (
        <Route path="/" exact={true} component={Main} />
      )}

      <Route path="/About" component={About} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Pungsa" component={Pungsa} />
      <Route path="/Jokbo" component={Jokbo} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Board" exact={true} component={Board} />
      <Route path="/Pungmul" exact={true} component={Pungmul} />
      <Route path="/Pungmul/Kkwaenggwari" component={Kkwaenggwari} />
      <Route path="/Pungmul/Janggu" component={Janggu} />
      <Route path="/Pungmul/Drum" component={Drum} />
      <Route path="/Pungmul/Jing" component={Jing} />
      <Route path="/Pungmul/Sogo" component={Sogo} />
      <Route path="/popup" component={popup} />
      <Route path="/history" component={history} />
      <Route path="/Board/notice/upload" component={UploadNotice} />
      <Route path="/Board/upload" component={UploadBoard} />
      <Route path="/AboutM" component={AboutM} />
      <Footer />
    </>
  );
}

export default App;