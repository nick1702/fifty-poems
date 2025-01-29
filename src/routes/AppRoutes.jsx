import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import SubmitPoem from "../pages/SubmitPoem";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SubmitPoem />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/submit-poem" element={<SubmitPoem />} />
        </Routes>
    );
}

export default AppRoutes;
