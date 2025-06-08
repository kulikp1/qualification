import { useEffect, useState, useCallback, useMemo } from "react";
import css from "./Spend.module.css";
import Category from "../Category/Category";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";

// 🔽 Додаткові утиліти
const getMonthString = (date) =>
  date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

const Spend = () => {
  const today = new Date();

  const [name] = useState(() => {
    return localStorage.getItem("name") || "User";
  });

  const [selectedDate] = useState(() => {
    const savedDate = localStorage.getItem("selectedDate");
    return savedDate ? new Date(savedDate) : new Date();
  });

  const [chartMonth, setChartMonth] = useState(() => {
    const savedDate = localStorage.getItem("selectedDate");
    return savedDate ? new Date(savedDate) : new Date();
  });

  const selectedDateString = selectedDate.toISOString().split("T")[0];
  const chartMonthString = chartMonth.toISOString().split("T")[0];

  const [spends, setSpends] = useState([]);
  const [monthlySpends, setMonthlySpends] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchSpends = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3000/money/day/${selectedDateString}`,
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
      setError(null);
    } catch (err) {
      console.error("Error fetching spends:", err.message);
      setError(err.message);
      setSpends([]);
      setTotalValue(0);
    } finally {
      setLoading(false);
    }
  }, [selectedDateString]);

  const fetchMonthlySpends = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3000/money/month/${chartMonthString}`,
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

      setMonthlySpends(result.data);
    } catch (err) {
      console.error("Error fetching monthly spends:", err.message);
      setMonthlySpends([]);
    }
  }, [chartMonthString]);

  useEffect(() => {
    fetchSpends();
    localStorage.setItem("selectedDate", selectedDateString);
  }, [fetchSpends, selectedDateString]);

  useEffect(() => {
    fetchMonthlySpends();
  }, [fetchMonthlySpends]);

  const handleDeleteSuccess = (deletedId) => {
    setSpends((prev) => prev.filter((item) => item.id !== deletedId));
    fetchSpends();
    fetchMonthlySpends();
  };

  const uniqueCategories = useMemo(() => {
    const categories = spends.map(
      (spend) => spend.category || "Unknown Category"
    );
    return ["All", ...new Set(categories)];
  }, [spends]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredSpends = useMemo(() => {
    if (selectedCategory === "All") return spends;
    return spends.filter(
      (spend) => (spend.category || "Unknown Category") === selectedCategory
    );
  }, [spends, selectedCategory]);

  const chartData = monthlySpends
    .filter(
      (item) =>
        item &&
        item.date &&
        !isNaN(new Date(item.date)) &&
        typeof item.value === "number"
    )
    .reduce((acc, item) => {
      const date = new Date(item.date);
      const day = date.getDate();

      const existing = acc.find((entry) => entry.day === day);
      const value = Number(item.value) || 0;

      if (existing) {
        existing.value += value;
      } else {
        acc.push({ day, value });
      }

      return acc;
    }, [])
    .sort((a, b) => a.day - b.day);

  const handlePrevMonth = () => {
    const newMonth = new Date(chartMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setChartMonth(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(chartMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    if (newMonth <= today) {
      setChartMonth(newMonth);
    }
  };

  const isCurrentMonth = () =>
    chartMonth.getFullYear() === today.getFullYear() &&
    chartMonth.getMonth() === today.getMonth();

  const todayIndex = chartData.findIndex(
    (item) => item.day === today.getDate()
  );
  const brushStart = Math.max(0, todayIndex - 4);
  const brushEnd = todayIndex !== -1 ? todayIndex : chartData.length - 1;

  return (
    <div className={css.mainContainer}>
      <div>
        <h1 className={css.logo}>BudgetTrack</h1>
      </div>

      <div className={css.mainSpendsContainer}>
        <h1 className={css.title}>Hello, {name}</h1>

        {loading ? (
          <h2 className={css.descr}>Loading...</h2>
        ) : error ? (
          <h2 className={css.descr}>Error: {error}</h2>
        ) : (
          <h2 className={css.descr}>
            {selectedDateString === new Date().toISOString().split("T")[0]
              ? "Today "
              : new Date(selectedDateString).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
            you spent {totalValue.toFixed(2)}$
          </h2>
        )}
      </div>

      {spends.length > 0 && (
        <div className={css.filterContainer}>
          <label htmlFor="categorySelect" className={css.filterLabel}>
            Filter by category:
          </label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className={css.select}
          >
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className={css.categories}>
        {filteredSpends.length > 0 ? (
          filteredSpends.map((spend) => (
            <Category
              key={spend.id}
              id={spend.id}
              name={spend.category || "Unknown Category"}
              amount={spend.value}
              recordingTime={spend.recordingTime}
              onDeleteSuccess={handleDeleteSuccess}
            />
          ))
        ) : !loading && !error ? (
          <p className={css.noSpendsText}>
            No records for this category on this day
          </p>
        ) : null}
      </div>

      {chartData.length > 0 && (
        <div className={css.chartContainer}>
          <div className={css.chartHeader}>
            <h3 className={css.chartTitle}>Month statistic</h3>
            <div className={css.monthControls}>
              <button
                onClick={handlePrevMonth}
                className={css.arrowBtn}
                aria-label="Previous Month"
              >
                <ChevronLeft size={20} />
              </button>

              <span className={css.monthLabel}>
                {getMonthString(chartMonth)}
              </span>

              <button
                onClick={handleNextMonth}
                className={`${css.arrowBtn} ${
                  isCurrentMonth() ? css.disabled : ""
                }`}
                disabled={isCurrentMonth()}
                aria-label="Next Month"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className={css.chartWrapper}>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4CAF50" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#4CAF50" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis
                  tickFormatter={(val) => `${(val / 1000).toFixed(1)}k $`}
                  domain={[0, 2000]}
                />
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
                <Brush
                  dataKey="day"
                  height={10}
                  stroke="#4CAF50"
                  travellerWidth={10}
                  startIndex={brushStart}
                  endIndex={brushEnd}
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
