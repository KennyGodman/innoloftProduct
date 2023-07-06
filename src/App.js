import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Product from './Pages/Product';
import Edit from './Pages/Edit';

function App() {
  return (
    <Router>
      <div>
          <Header/>
            <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/edit" element={<Edit/>}/>
            </Routes>
            </div>
          </div>
    </Router>
  );
}

export default App;
