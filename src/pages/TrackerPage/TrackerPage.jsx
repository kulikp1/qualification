import DailySpend from "../../components/DailySpendPage/DailySpendPage";
import styles from "./TrackerPage.module.css";

export default function TrackerPage() {
  return (
    <div className={styles.TrackerPage}>
      <DailySpend />
      {/* <MonthSpend /> */}
    </div>
  );
}
