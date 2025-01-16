import css from "./CalendarItem.module.css";
const CalendarItem = () => {
  return (
    <div className={css.calendarContainer}>
      <button className={css.calendarItem}>1</button>
    </div>
  );
};

export default CalendarItem;
