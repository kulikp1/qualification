import CalendarItem from "../CalendarItem/CalendarItem";
import css from "./Calendar.module.css";
const Calendar = () => {
  return (
    <div className={css.addItem}>
      <CalendarItem value="1" />
      <CalendarItem value="2" />
      <CalendarItem value="3" />
      <CalendarItem value="4" />
      <CalendarItem value="5" />
      <CalendarItem value="6" />
      <CalendarItem value="7" />
      <CalendarItem value="8" />
      <CalendarItem value="9" />
      <CalendarItem value="10" />
    </div>
  );
};

export default Calendar;
