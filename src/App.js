import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Radios } from "./pages/Radios";
import './styles/global.scss'
import { Header } from './components/Header';
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="radios/:country" element={<Radios />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
