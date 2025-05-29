import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import LegalPage from './components/pages/LegalPage';
import About from './components/pages/About';
import SharePage from './components/pages/SharePage';
import Apple from '.public/.well-known/apple-app-site-association';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/share/:recipeId" element={<SharePage />} />
            <Route path="/.well-known/apple-app-site-association" element={<Apple />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
