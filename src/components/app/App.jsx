import "./App.css";
import HomePage from "../../pages/Homepage/HomePage.jsx";
import TrackerPage from "../../pages/TrackerPage/TrackerPage.jsx";
import UserSettingsPage from "../../pages/UserSettingsPage/UserSettingsPage.jsx";
import SignInPage from "../../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";
import DeleteModal from "../Modals/DeleteModal/DeleteModal.jsx";

function App() {
  return (
    <>
      <HomePage></HomePage>
      <TrackerPage></TrackerPage>
      <UserSettingsPage></UserSettingsPage>
      <SignInPage></SignInPage>
      <SignUpPage></SignUpPage>
      <DeleteModal></DeleteModal>
    </>
  );
}

export default App;
