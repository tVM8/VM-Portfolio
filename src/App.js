import Navbar from "./component/Navbar/navbar";
import Intro from "./component/Intro/intro";
import About from "./component/About/about";
import Works from "./component/Works/works";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";
import Skills from "./component/Skills/skill";
// import Preloader from "./component/Preloader/Preloader";

function App() {
  return (
    <div className="App">
      {/* <Preloader/> */}
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
