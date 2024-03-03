import './App.css';
import Entry from './Entry';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import PostalInfo from './PostalInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry/>} />
        <Route path="/:pincode" element={<PostalInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
