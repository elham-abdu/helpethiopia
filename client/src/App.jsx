import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
