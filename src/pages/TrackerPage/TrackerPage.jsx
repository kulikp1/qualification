import DailySpend from "../../components/DailySpend/DailySpend.jsx";
import styles from "./TrackerPage.module.css";

export default function TrackerPage() {
  return (
    <div className={styles.container}>
      <DailySpend />
      {/* <MonthSpend /> */}
    </div>
  );
}
