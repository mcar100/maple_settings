import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Component/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header-container">This is header</div>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
