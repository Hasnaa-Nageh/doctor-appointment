import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AddAppointment from "./pages/AddAppointment";
import Footer from "./components/Footer";
import AddDoctor from "./pages/AddDoctor";
import AllDoctors from "./pages/AllDoctors";
import DoctorDetails from "./pages/DoctorDetails";
import MyAppointments from "./pages/MyAppointments";
import Service from "./pages/Service";
import About from "./pages/About";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-appointment" element={<AddAppointment />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/all-doctors" element={<AllDoctors />} />
        <Route path="/all-doctors/:id" element={<DoctorDetails />} />
        <Route path="/my-appointment" element={<MyAppointments />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
