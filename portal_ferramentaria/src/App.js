import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projetos from './Projetos';
import PecasEstampo from './PecasEstampo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projetos />} />
        <Route path="/estampo/:id" element={<PecasEstampo />} />
      </Routes>
    </Router>
  );
}

export default App;