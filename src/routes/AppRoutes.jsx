import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import SubmitPoem from "../pages/SubmitPoem";
import Profile from "../pages/Profile";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SubmitPoem />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/submit-poem" element={<SubmitPoem />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default AppRoutes;
