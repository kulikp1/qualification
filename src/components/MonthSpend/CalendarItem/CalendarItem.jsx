import css from "./CalendarItem.module.css";

const CalendarItem = ({ value, month, year }) => {
  const handleClick = () => {
    const day = String(value).padStart(2, "0");
    const m = String(month + 1).padStart(2, "0"); // month index correction
    const selectedDate = `${year}-${m}-${day}`;

    localStorage.setItem("selectedDate", selectedDate);

    window.location.reload();
  };

  return (
    <div className={css.calendarContainer}>
      <button onClick={handleClick} className={css.calendarItem}>
        {value}
      </button>
    </div>
  );
};

export default CalendarItem;
