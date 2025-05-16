import CalendarItem from "../CalendarItem/CalendarItem";
import css from "./Calendar.module.css";

const Calendar = ({ month, year }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={css.addItem}>
      {daysArray.map((day) => (
        <CalendarItem key={day} value={day} month={month} year={year} />
      ))}
    </div>
  );
};

export default Calendar;
