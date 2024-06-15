import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import NavBar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Admon from "./components/Pages/Admon";
import NewUser from "./components/Layout/NewUser";
import UserList from "./components/Layout/UserList";
import UserSearch from "./components/Layout/UserSearch";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admon/*" element={<Admon />} />
          <Route path="/admon/newuser" element={<NewUser />} />
          <Route path="/admon/usersearch" element={<UserSearch />} />
          <Route path="/admon/userlist" element={<UserList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
