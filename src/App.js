import './App.css';
import Contact from './Contact';
import Experience from './Experience';
import Home from './Home';
import Involvement from './Involvement';
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Involvement />
      <Contact />
    </div>
  );
}

export default App;
