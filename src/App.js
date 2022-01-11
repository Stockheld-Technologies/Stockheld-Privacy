import './App.css';
import MyNavbar from './MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import PomfretPrivacy from './Pomfret-Privacy';
import PomfretTerms from './Pomfret-Terms';
import Homepage from './Homepage';
import AboutPartners from './About-Partners';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/partners/pomfretschool/privacy" element={<PomfretPrivacy/>} />
        <Route path="/partners/pomfretschool/terms" element={<PomfretTerms/>} />
        <Route path="/partners/about" element={<AboutPartners/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
     <footer className="footer"> 
     <p>&copy; 2022 Stockheld Technologies. All Rights Reserved.</p>
     </footer> 
    </div>
  );
}

export default App;
