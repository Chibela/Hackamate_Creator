import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateHackamate from "./pages/CreateHackamate";
import Gallery from "./pages/Gallery";
import HackamateDetail from "./pages/HackamateDetail";
import EditHackamate from "./pages/EditHackamate";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <h2>Hackamate Creator</h2>
          <Link to="/">Home</Link>
          <Link to="/create">Create a Hackamate</Link>
          <Link to="/hackamates">Hackamate Gallery</Link>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateHackamate />} />
            <Route path="/hackamates" element={<Gallery />} />
            <Route path="/hackamates/:id" element={<HackamateDetail />} />
            <Route path="/hackamates/:id/edit" element={<EditHackamate />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
