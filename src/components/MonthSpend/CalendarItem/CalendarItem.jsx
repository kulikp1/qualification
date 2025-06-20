import css from "./CalendarItem.module.css";

const CalendarItem = ({ value, month, year }) => {
  const day = String(value).padStart(2, "0");
  const m = String(month + 1).padStart(2, "0");
  const selectedDateStr = `${year}-${m}-${day}`;
  const selectedDate = new Date(`${year}-${m}-${day}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isFuture = selectedDate > today;
  const storedDate = localStorage.getItem("selectedDate");
  const isSelected = storedDate === selectedDateStr;

  const handleClick = () => {
    if (!isFuture) {
      localStorage.setItem("selectedDate", selectedDateStr);
      window.location.reload(); // можна замінити на onChange або useEffect
    }
  };

  return (
    <div className={css.calendarContainer}>
      <button
        onClick={handleClick}
        className={`${css.calendarItem} ${isSelected ? css.selected : ""}`}
        disabled={isFuture}
      >
        {value}
      </button>
    </div>
  );
};

export default CalendarItem;
