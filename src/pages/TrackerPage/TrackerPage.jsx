import DailySpend from "../../components/DailySpendPage/DailySpendPage";
import MonthsSpend from "../../components/MonthSpend/MonthSpend";
import styles from "./TrackerPage.module.css";

export default function TrackerPage() {
  return (
    <div className={styles.TrackerPage}>
      <DailySpend />
      <MonthsSpend />
    </div>
  );
}
