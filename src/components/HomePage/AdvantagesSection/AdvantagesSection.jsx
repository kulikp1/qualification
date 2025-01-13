import css from "./AdvantagesSection.module.css";
import customer1 from "../../../assets/homePageAssets/pre-avatar.png";
const AdvantagesSection = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.avatarContainer}>
        <div className={css.avatars}>
          <img src={customer1} alt="Customer 1" className={css.avatar} />
          <img src={customer1} alt="Customer 2" className={css.avatar} />
          <img src={customer1} alt="Customer 3" className={css.avatar} />
        </div>
        <div className={css.text}>
          {/* <h2>
            Our <span className={css.highlight}>happy</span> customers
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
