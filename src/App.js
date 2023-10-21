import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieApp from "./MovieApp";
import MovieDescription from "./MovieDescription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MovieApp />} />
          <Route exact path="/movie/:movieId" element={<MovieDescription />} />
        </Routes>
      </BrowserRouter>
      {/* <MovieApp /> */}
    </div>
  );
}
export default App;
