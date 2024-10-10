import classes from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerText}>
        <span>Копирайт(c) 2023 </span>
        <span className={classes.nameText}>Selivanchiki. </span>
        <span>Все права защищены.</span>
      </div>
    </div>
  );
};
