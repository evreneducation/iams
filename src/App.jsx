import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventOverview from "./pages/EventOverview";
import Assembly from "./pages/Assembly";
import Agenda from "./pages/Agenda";
import Sponsorship from "./pages/Sponsorship";
import Awards from "./pages/Awards";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";
import ScrollToTop from "./utils/ScrollToTop";
import About from "./pages/About";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import RegistrationForm from "./pages/multiStepForm";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/overview" element={<EventOverview />} />
            <Route path="/assembly" element={<Assembly />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/venue-travel" element={<Venue />} />
            <Route path="/contact" element={<Contact/>} />
             <Route path="/registration-form" element={<RegistrationForm/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
