import CalendarItem from "../CalendarItem/CalendarItem";
import css from "./Calendar.module.css";

const Calendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 = January, 1 = February...

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={css.addItem}>
      {daysArray.map((day) => (
        <CalendarItem key={day} value={day} />
      ))}
    </div>
  );
};

export default Calendar;
