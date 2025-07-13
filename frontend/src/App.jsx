import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import RoutesPage from "./pages/Routes";
function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen px-4">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/routes" element={<RoutesPage />} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;