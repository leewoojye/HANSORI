import "./App.css";
import Header from "./components/Header";
import HeaderM from "./components/HeaderM";
import { Route } from "react-router-dom";
import { useLocation } from 'react-router-dom'
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
import PungsaM from "./components/PungsaM";
import PungmulM from "./components/PungmulM";
import FooterM from "./components/FooterM";
import BoardM from "./components/BoardM";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  let location = useLocation();

  return (
    <>
      {isMobile ? <HeaderM /> : (location.pathname === "/" ? null : <Header />)}
      {isMobile ? (
        <Route path="/" exact={true} component={MainM} />
      ) : (
        <Route path="/" exact={true} component={Main} />
      )}

      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/pungsa" component={Pungsa} />
      <Route path="/pungsaM" component={PungsaM} />
      <Route path="/jokbo" component={Jokbo} />
      {/* <Route path="/profile" component={Profile} /> */}
      <Route path="/profile" component={Board} />
      <Route path="/board" exact={true} component={Board} />
      <Route path="/boardM" exact={true} component={BoardM} />
      <Route path="/pungmul" exact={true} component={Pungmul} />
      <Route path="/pungmulM" exact={true} component={PungmulM} />
      <Route path="/pungmul/kkwaenggwari" component={Kkwaenggwari} />
      <Route path="/pungmul/janggu" component={Janggu} />
      <Route path="/pungmul/drum" component={Drum} />
      <Route path="/pungmul/jing" component={Jing} />
      <Route path="/pungmul/sogo" component={Sogo} />
      <Route path="/popup" component={popup} />
      <Route path="/history" component={history} />
      <Route path="/board/notice/upload" component={UploadNotice} />
      <Route path="/board/upload" component={UploadBoard} />
      <Route path="/aboutM" component={AboutM} />
      {isMobile ? <FooterM /> : <FooterM />}
    </>
  );
}

export default App;
