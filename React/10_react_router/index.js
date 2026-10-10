import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import LearnMore from "./src/LearnMore";
import DeepDive from "./src/DeepDive";
function App()
{
    return (
       

      <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<Details></Details>}>
          <Route index element={<LearnMore />} />
          <Route path="deep" element={<DeepDive />} />
          </Route>
        </Routes>
  </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(
   <App></App>
)