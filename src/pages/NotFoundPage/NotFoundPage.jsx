import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notFoundContainer}>
      <p>{"Opps... NOT FOUND"}</p>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
}
