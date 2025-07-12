import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import Api from './endpoints/Api.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Api /> */}
  </>
);