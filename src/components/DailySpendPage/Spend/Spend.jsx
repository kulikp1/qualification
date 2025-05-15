import { useEffect, useState } from "react";
import css from "./Spend.module.css";
import Category from "../Category/Category";
import money from "../../../assets/spendPageAssets/moneyPhoto.jpg";

const Spend = () => {
  const [spends, setSpends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpends = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:3000/money", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched spends data:", data);

        // 💡 Спроба обробити різні можливі формати
        let spendsArray = [];

        if (Array.isArray(data)) {
          spendsArray = data;
        } else if (data && Array.isArray(data.spends)) {
          spendsArray = data.spends;
        } else {
          throw new Error("Invalid data format from backend");
        }

        setSpends(spendsArray);
        setError(null);
      } catch (err) {
        console.error("Error fetching spends:", err.message);
        setError(err.message);
        setSpends([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSpends();
  }, []);

  const totalSpent = Array.isArray(spends)
    ? spends.reduce((acc, spend) => acc + (spend.value || 0), 0)
    : 0;

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
            Today you spent {totalSpent.toFixed(2)}$ on the following:
          </h2>
        )}
      </div>

      <div className={css.categories}>
        {spends.length > 0 ? (
          spends.map((spend) => (
            <Category
              key={spend._id || spend.id}
              name={spend.category || "Unknown Category"}
              amount={spend.value}
            />
          ))
        ) : !loading && !error ? (
          <p className={css.noSpendsText}>No spends for today.</p>
        ) : null}
      </div>

      <img src={money} alt="money" className={css.moneyImg} />
    </div>
  );
};

export default Spend;
