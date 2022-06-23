import "./App.css";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Pungsa from "./components/Pungsa";
import Jokbo from "./components/Jokbo";
import Profile from "./components/Profile";
import Test from "./components/Test";
import Board from "./components/Board";
import Pungmul from "./components/Pungmul";
import Kkwaenggwari from "./components/Kkwaenggwari";
import Janggu from "./components/Janggu";
import Drum from "./components/Drum";
import Jing from "./components/Jing";
import Sogo from "./components/Sogo";
import history from "./components/history";
import popup from "./components/popup";
import Main2 from "./components/Main2";
import UploadNotice from "./components/UploadNotice";
import UploadBoard from "./components/UploadBoard";
import PhotoTest from "./components/PhotoTest";

function App() {
  return (
    <>
      <Header />
      {/* <Route path="/" exact={true} component={Main} /> */}
      <Route path="/" exact={true} component={Main2} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/pungsa" component={Pungsa} />
      <Route path="/jokbo" component={Jokbo} />
      <Route path="/profile" component={Profile} />
      <Route path="/test" component={Test} />
      <Route path="/board" exact={true} component={Board} />
      <Route path="/pungmul" exact={true} component={Pungmul} />
      <Route path="/pungmul/kkwaenggwari" component={Kkwaenggwari} />
      <Route path="/pungmul/janggu" component={Janggu} />
      <Route path="/pungmul/drum" component={Drum} />
      <Route path="/pungmul/jing" component={Jing} />
      <Route path="/pungmul/sogo" component={Sogo} />
      <Route path="/popup" component={popup} />
      <Route path="/history" component={history} />
      <Route path="/board/notice/upload" component={UploadNotice} />
      <Route path="/board/upload" component={UploadBoard} />
      <Route path="/phototest" component={PhotoTest} />
      <Footer />
    </>
  );
}

export default App;
