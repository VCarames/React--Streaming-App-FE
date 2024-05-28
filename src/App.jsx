import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmarked from "./pages/Bookmarked";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="TVSeries" element={<TVSeries />} />
        <Route path="Bookmarked" element={<Bookmarked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
