import MealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="food " />
      </div>
    </>
  );
};
