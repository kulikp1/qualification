import DailySpend from "../../components/DailySpend/DailySpend.jsx";
import styles from "./TrackerPage.module.css";

const TrackerPage = () => {
  return (
    <div className={styles.container}>
      <DailySpend />
      {/* <MonthSpend /> */}
    </div>
  );
};

export default TrackerPage;
