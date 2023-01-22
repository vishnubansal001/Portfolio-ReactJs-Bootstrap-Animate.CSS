import logo from './logo.svg';
import './App.css';
import {NavBar} from './componens/NavBar';
import {Banner} from './componens/Banner';
import {Skills} from './componens/Skills';
import {Projects} from './componens/Projects';
import {Contact} from './componens/Contact';
import {Footer} from './componens/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
