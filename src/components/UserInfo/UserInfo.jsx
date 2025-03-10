import { useState, useRef, useEffect } from "react";
import css from "./UserInfo.module.css";
import avatar from "../../assets/homePageAssets/pre-avatar.png";
import { SlArrowDown } from "react-icons/sl";
import UserBarPopover from "../UserBarPopover/UserBarPopover";

const UserInfo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  // Функція для перевірки, чи клік був у модальному вікні
  const isClickInsideModal = (event) => {
    return event.target.closest(".modal-open");
  };

  const togglePopover = (event) => {
    event.stopPropagation();
    setIsPopoverOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      !isClickInsideModal(event) // Оновлена перевірка
    ) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    if (isPopoverOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isPopoverOpen]);

  return (
    <div className={css.pageContainer}>
      <div className={css.Container}>
        <div className={css.description}>
          <h3>Spending calendar</h3>
        </div>

        <div className={css.userItems}>
          <h3>Pavlo</h3>
          <img src={avatar} alt="avatar" className={css.avatar} />

          <button
            ref={buttonRef}
            onClick={togglePopover}
            className={css.button}
          >
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

      {isPopoverOpen && (
        <div ref={popoverRef}>
          <UserBarPopover isVisible={isPopoverOpen} onClose={togglePopover} />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
