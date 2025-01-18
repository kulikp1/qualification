import UserSettingsPage from "../../components/UserSettingsPage/UserSettingsPage";
import styles from "./UserSettingsPage.module.css";

export default function TrackerPage() {
  return (
    <div className={styles.SettingsPage}>
      <UserSettingsPage />
    </div>
  );
}
