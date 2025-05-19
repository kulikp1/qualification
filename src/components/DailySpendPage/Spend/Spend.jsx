import { useEffect, useState, useCallback } from "react";
import css from "./Spend.module.css";
import Category from "../Category/Category";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Spend = () => {
  const [spends, setSpends] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [dailyNorm, setDailyNorm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedDate =
    localStorage.getItem("selectedDate") ||
    new Date().toISOString().split("T")[0];

  const fetchSpends = useCallback(async () => {
    try {
      setLoading(true);
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
  }, [selectedDate]);

  useEffect(() => {
    fetchSpends();
  }, [fetchSpends]);

  const handleDeleteSuccess = (deletedId) => {
    setSpends((prev) => prev.filter((item) => item.id !== deletedId));
    fetchSpends();
  };

  // ✅ Групування витрат по днях
  const chartData = spends
    .reduce((acc, item) => {
      const day = new Date(item.recordingTime).getDate();
      const existing = acc.find((entry) => entry.day === day);
      if (existing) {
        existing.value += item.value;
      } else {
        acc.push({ day, value: item.value });
      }
      return acc;
    }, [])
    .sort((a, b) => a.day - b.day); // сортуємо по днях

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
              id={spend.id}
              name={spend.category || "Unknown Category"}
              amount={spend.value}
              recordingTime={spend.recordingTime}
              onDeleteSuccess={handleDeleteSuccess}
            />
          ))
        ) : !loading && !error ? (
          <p className={css.noSpendsText}>No spends for this day.</p>
        ) : null}
      </div>

      {/* 📊 Графік витрат по днях */}
      {chartData.length > 0 && (
        <div className={css.chartContainer}>
          <h3 className={css.chartTitle}>Spending per Day</h3>
          <div className={css.chartWrapper}>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4CAF50" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#4CAF50" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4CAF50"
                  strokeWidth={3}
                  fill="url(#colorSpend)"
                  dot={{
                    stroke: "#4CAF50",
                    strokeWidth: 2,
                    fill: "#fff",
                    r: 6,
                  }}
                  activeDot={{ r: 8 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spend;
