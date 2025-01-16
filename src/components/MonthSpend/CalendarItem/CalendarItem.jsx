import css from "./CalendarItem.module.css";
// eslint-disable-next-line react/prop-types
const CalendarItem = ({ value }) => {
  return (
    <div className={css.calendarContainer}>
      <button className={css.calendarItem}>{value}</button>
    </div>
  );
};

export default CalendarItem;
