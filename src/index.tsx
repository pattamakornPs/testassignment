import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./page/home/index";
import DetailApp from './page/detailrestaurant/index'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id/:name" element={<DetailApp />} />
    </Routes>
  </Router>
);

reportWebVitals();
