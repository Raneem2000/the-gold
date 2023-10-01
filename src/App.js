import { Routes, Route } from "react-router-dom";
//Auth
// import SignUp from "./Pages/Website/Auth/SignUp";
import Login from "./Pages/Website/Auth/Login";
import RequireAuth from "./Pages/Website/Auth/RequireAuth";
//Dashbaord
import Dashboard from "./Pages/Dashboard/Dashboard";
//Users
import Catego from "./Pages/Dashboard/Catego/Catego";

//Website
import Home from "./Pages/Website/Home";
import './all.min.css';
import Items from "./Pages/Website/Auth/Items";


function App() {
  return (
    <div>
      <Routes>
        { /* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        {/* Protected Routes */}
        <Route element={<RequireAuth/>}>
          <Route path="/dashboard/" element={<Dashboard/>}>
            <Route path="categories" element={<Catego/>} />
          </Route>
        </Route>
        {/* <Route path="/items" element={<Items/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
