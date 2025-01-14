import css from "./Category.module.css";
import customer1 from "../../../assets/homePageAssets/pre-avatar.png";

const Category = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Category</h1>
      <div className={css.categoryName}>
        <img
          src={customer1}
          alt="categoryAvatar"
          className={css.categoryAvatar}
        />
        <h2 className={css.categoryDescr}>Shop</h2>
      </div>
      <p className={css.amount}>100$</p>
    </div>
  );
};

export default Category;
