import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import TrackerPage from "../../pages/TrackerPage/TrackerPage.jsx";
import SignInPage from "../../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import SharedLayout from "../SharedLayout/SharedLayout.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx"; // імпортуй компонент

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route
          path="/tracker"
          element={
            <PrivateRoute>
              <TrackerPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
