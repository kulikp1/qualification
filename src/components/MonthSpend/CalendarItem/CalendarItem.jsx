import css from "./CalendarItem.module.css";
const CalendarItem = ({ value }) => {
  return (
    <div className={css.calendarContainer}>
      <button className={css.calendarItem}>{value}</button>
    </div>
  );
};

export default CalendarItem;
