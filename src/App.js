import './App.css';
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Experinces from './components/Experiences.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Testnomials from './components/Testinomials.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className="bg-sky-900 text-white flex flex-col sticky text-center">
      <Home />
      <Navbar />
      <About />
      <Experinces />
      <Testnomials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
