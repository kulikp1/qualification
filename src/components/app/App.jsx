import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import TrackerPage from "../../pages/TrackerPage/TrackerPage.jsx";
import UserSettingsPage from "../../pages/UserSettingsPage/UserSettingsPage.jsx";
import SignInPage from "../../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import DeleteModal from "../Modals/DeleteModal/DeleteModal.jsx";
import LogOutModal from "../Modals/LogOutModal/LogOutModal.jsx";
import EditSpendModal from "../Modals/EditSpendModal/EditSpendComponent/EditSpendComponent.jsx";
import AddSpendComponent from "../Modals/AddSpendModal/AddSpendComponent/AddSpendComponent.jsx";
// import css from "./App.css";
import SharedLayout from "../SharedLayout/SharedLayout.jsx";

function App() {
  return (
    // <div className={css.appContainer}>
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/editSpend" element={<EditSpendModal />} />
        <Route path="/delete" element={<DeleteModal />} />
        <Route path="/userSettings" element={<UserSettingsPage />} />
        <Route path="/logOut" element={<LogOutModal />} />
        <Route path="/addSpend" element={<AddSpendComponent />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SharedLayout>
    // </div>
  );
}

export default App;
