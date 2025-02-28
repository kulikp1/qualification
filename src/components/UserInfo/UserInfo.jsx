import css from "./UserInfo.module.css";
import avatar from "../../assets/homePageAssets/pre-avatar.png";
import { SlArrowDown } from "react-icons/sl";
import UserBarPopover from "../UserBarPopover/UserBarPopover";
import { useState } from "react";

const UserInfo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div className={css.pageContainer}>
      <div className={css.Container}>
        <div className={css.description}>
          <h3>Spending calendar</h3>
        </div>

        <div className={css.userItems}>
          <h3>Pavlo</h3>
          <img src={avatar} alt="avatar" className={css.avatar} />

          <button onClick={togglePopover}>
            <SlArrowDown
              className={css.icon}
              style={{
                transform: isPopoverOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </div>
      </div>
      <UserBarPopover isVisible={isPopoverOpen} onClose={closePopover} />
    </div>
  );
};

export default UserInfo;
