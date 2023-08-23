import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import MainPage from './Component/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="body-container">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
