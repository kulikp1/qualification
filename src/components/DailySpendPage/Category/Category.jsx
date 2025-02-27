import css from "./Category.module.css";
// import customer1 from "../../../assets/homePageAssets/pre-avatar.png";
import { AiOutlineTransaction } from "react-icons/ai";

const Category = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Category</h1>
      <div className={css.categoryName}>
        <AiOutlineTransaction className={css.icon} />

        <div className={css.categorySpend}>
          <h2 className={css.categoryDescr}>Shop</h2>
          <p className={css.amount}>100$</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
