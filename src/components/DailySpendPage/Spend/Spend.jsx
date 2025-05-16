import { useEffect, useState } from "react";
import css from "./Spend.module.css";
import Category from "../Category/Category";
import money from "../../../assets/spendPageAssets/moneyPhoto.jpg";

const Spend = () => {
  const [spends, setSpends] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [dailyNorm, setDailyNorm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🟢 Отримуємо дату: з localStorage або сьогодні
  const selectedDate =
    localStorage.getItem("selectedDate") ||
    new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchSpends = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          `http://localhost:3000/money/day/${selectedDate}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Fetched spends data:", result);

        if (!Array.isArray(result.data)) {
          throw new Error("Invalid data format from backend");
        }

        setSpends(result.data);
        setTotalValue(result.totalValue || 0);
        setDailyNorm(result.dailyNorm || null);
        setError(null);
      } catch (err) {
        console.error("Error fetching spends:", err.message);
        setError(err.message);
        setSpends([]);
        setTotalValue(0);
        setDailyNorm(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSpends();
  }, [selectedDate]); // 🔁 перезапуск при зміні дати

  return (
    <div className={css.mainContainer}>
      <div>
        <h1 className={css.logo}>BudgetTrack</h1>
      </div>

      <div className={css.mainSpendsContainer}>
        <h1 className={css.title}>Hello, Pavlo!</h1>

        {loading ? (
          <h2 className={css.descr}>Loading...</h2>
        ) : error ? (
          <h2 className={css.descr}>Error: {error}</h2>
        ) : (
          <h2 className={css.descr}>
            {selectedDate === new Date().toISOString().split("T")[0]
              ? "Today "
              : new Date(selectedDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
            you spent {totalValue.toFixed(2)}$ on the following:
          </h2>
        )}

        {!loading && !error && dailyNorm !== null && (
          <p className={css.normText}>
            Your daily norm is {dailyNorm.toFixed(2)}$
          </p>
        )}
      </div>

      <div className={css.categories}>
        {spends.length > 0 ? (
          spends.map((spend) => (
            <Category
              key={spend._id}
              name={spend.category || "Unknown Category"}
              amount={spend.value}
            />
          ))
        ) : !loading && !error ? (
          <p className={css.noSpendsText}>No spends for this day.</p>
        ) : null}
      </div>

      <img src={money} alt="money" className={css.moneyImg} />
    </div>
  );
};

export default Spend;
