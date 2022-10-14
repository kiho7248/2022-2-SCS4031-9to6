import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Safety from "./pages/Safety";
import Report from "./pages/Report";
import Statistics from "./pages/Statistics";
import Service from "./pages/Service";
import MapInfo from "./pages/MapInfo";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function Routers() {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/report" element={<Report />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/service" element={<Service />} />
                <Route path="/service/map" element={<MapInfo />} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default Routers;