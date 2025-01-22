import "./App.css";
import HomePage from "../../pages/Homepage/HomePage.jsx";
import TrackerPage from "../../pages/TrackerPage/TrackerPage.jsx";
import UserSettingsPage from "../../pages/UserSettingsPage/UserSettingsPage.jsx";
import SignInPage from "../../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";
import DeleteModal from "../Modals/DeleteModal/DeleteModal.jsx";
import LogOutModal from "../Modals/LogOutModal/LogOutModal.jsx";
import AddSpendModal from "../Modals/AddSpendModal/AddSpendComponent/AddSpendModal.jsx";

function App() {
  return (
    <>
      <HomePage></HomePage>
      <TrackerPage></TrackerPage>
      <UserSettingsPage></UserSettingsPage>
      <SignInPage></SignInPage>
      <SignUpPage></SignUpPage>
      <DeleteModal></DeleteModal>
      <LogOutModal></LogOutModal>
      <AddSpendModal></AddSpendModal>
    </>
  );
}

export default App;
