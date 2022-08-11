import './App.css';
import Contact from './Contact';
import Experience from './Experience';
import Home from './Home';
import Involvement from './Involvement';
import Navbar from './Navbar'
import { Helmet } from "react-helmet";

function App() {
  return (
    
    <div className="App">
      <div className="application">
          <Helmet>
              <meta charSet="utf-8" />
              <title>Mello Portfolio</title>
              <meta name="description" content="My Portfolio" />
          </Helmet>
      </div>
      <Navbar />
      <Home />
      <Experience />
      <Involvement />
      <Contact />
    </div>
  );
}

export default App;
