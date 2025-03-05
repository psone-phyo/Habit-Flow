import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/auth/Login.js";
import Signup from "./pages/auth/Signup.js";
import Profile from "./pages/settings/Profile.js";
import Language from "./pages/settings/Language.js";
import MoodRecord from "./pages/settings/MoodRecord.js";
import SecurityPrivacy from "./pages/settings/SecurityPrivacy.js";
import Notification from "./pages/settings/Notification.js";
import FAQs from "./pages/settings/FAQs.js";
import ContactSupport from "./pages/settings/ContactSupport.js";
import Dasboard from "./pages/Dash.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/language" element={<Language />} />
        <Route path="/mood-record" element={<MoodRecord />} />
        <Route path="/security-privacy" element={<SecurityPrivacy />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/dash" element={<Dasboard />} />
      </Routes>
    </Router>
  );
}

export default App;