import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import UserProfile from "./pages/UserProfile";
import Explore from "./pages/Explore";
import CreateBlog from "./pages/CreateBlog";
import LoginAndSignup from "./pages/LoginAndSignup";
import Register from "./pages/Register";


import './App.css'
import Navbar from "./Components/Navbar";

function App() {
    return(
        <div className="">
            {/* <Navbar/> */}
            <Router>
                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/explore" element={<Explore />} />
                <Route exact path="/profile" element={<UserProfile />} />
                <Route exact path="/create" element={<CreateBlog />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<LoginAndSignup/>} />
                <Route exact path="/explore" element={<Explore/>} />
                </Routes>
            </Router>
            
        </div>
    );
}

export default App