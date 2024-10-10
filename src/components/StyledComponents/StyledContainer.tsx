import React from "react";
import "../AboutMe/aboutMe.module.css";
import classes from "../StyledComponents/styledContainer.module.css";

interface IStyledContainer {
  id: string;
  title: string;
  description: string;
  backgroundStyle: string;
  children: React.ReactNode;
}

export const StyledContainer: React.FC<IStyledContainer> = ({
  id,
  title,
  description,
  backgroundStyle,
  children,
}) => {
  return (
    <div
      id={id}
      className={classes.wrap}
      style={{ backgroundColor: backgroundStyle }}
    >
      <div className={classes.container}>
        <span
          data-aos="fade-in"
          data-aos-duration="2000"
          className={classes.generalTitle}
        >
          {title}
        </span>
        <span
          data-aos="fade-in"
          data-aos-duration="2000"
          className={classes.detailTitle}
        >
          {description}
        </span>
        {children}
      </div>
    </div>
  );
};
