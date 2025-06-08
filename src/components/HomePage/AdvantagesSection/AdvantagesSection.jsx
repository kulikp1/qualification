import css from "./AdvantagesSection.module.css";
import customer1 from "../../../assets/homePageAssets/pre-avatar.png";

import { useTranslation } from "react-i18next";

const AdvantagesSection = () => {
  const { t } = useTranslation();

  return (
    <div className={css.mainContainer}>
      <div className={css.avatarContainer}>
        <div className={css.avatars}>
          <img src={customer1} alt="Customer 1" className={css.avatar} />
          <img src={customer1} alt="Customer 2" className={css.avatar} />
          <img src={customer1} alt="Customer 3" className={css.avatar} />
        </div>
        <h2 className={css.describe}>
          {t("happyCustomersStart")}{" "}
          <span className={css.highlight}>{t("happyCustomersHighlight")}</span>{" "}
          {t("happyCustomersEnd")}
        </h2>
      </div>
    </div>
  );
};

export default AdvantagesSection;
