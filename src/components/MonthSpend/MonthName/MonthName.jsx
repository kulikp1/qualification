import { useState } from "react";
import css from "./MonthName.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthName = () => {
  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handlePrev = () => {
    setCurrentMonthIndex((prev) => {
      if (prev === 0) {
        setCurrentYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentMonthIndex((prev) => {
      if (prev === 11) {
        setCurrentYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className={css.nameContainer}>
      <button onClick={handlePrev} className={css.arrowBtn}>
        <IoIosArrowBack />
      </button>
      <span>
        {monthNames[currentMonthIndex]} {currentYear}
      </span>
      <button onClick={handleNext} className={css.arrowBtn}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default MonthName;
