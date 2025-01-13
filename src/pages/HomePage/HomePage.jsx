import AdvantagesSection from "../../components/HomePage/AdvantagesSection/AdvantagesSection.jsx";
import WelcomeSection from "../../components/HomePage/WelcomeSection/WelcomeSection.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
}
