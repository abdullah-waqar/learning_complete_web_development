
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CardPage from './Pages/CardPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/player/:playerId' element={<CardPage></CardPage>}></Route>
    </Routes>
  </BrowserRouter>,
)
