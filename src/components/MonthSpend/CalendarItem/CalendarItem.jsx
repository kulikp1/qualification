import css from "./CalendarItem.module.css";

const CalendarItem = ({ value, month, year }) => {
  const day = String(value).padStart(2, "0");
  const m = String(month + 1).padStart(2, "0"); // бо січень — 0
  const selectedDateStr = `${year}-${m}-${day}`;
  const selectedDate = new Date(`${year}-${m}-${day}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // обнуляємо час

  const isFuture = selectedDate > today;

  const handleClick = () => {
    if (!isFuture) {
      localStorage.setItem("selectedDate", selectedDateStr);
      window.location.reload();
    }
  };

  return (
    <div className={css.calendarContainer}>
      <button
        onClick={handleClick}
        className={css.calendarItem}
        disabled={isFuture}
      >
        {value}
      </button>
    </div>
  );
};

export default CalendarItem;
