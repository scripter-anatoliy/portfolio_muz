import React from "react";
import classes from "../StyledComponents/spinner.module.css";

export const Spinner: React.FC = () => {
  return (
    <div className={classes.musicLoader}>
      <div className={classes.staff}>
        <div className={classes.clef}>𝄞</div>

        <div className={classes.linesContainer}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={classes.line}></div>
          ))}
        </div>

        <div className={classes.notesContainer}>
          <div className={`${classes.note} ${classes.note1}`}>♪</div>
          <div className={`${classes.note} ${classes.note2}`}>♪</div>
          <div className={`${classes.note} ${classes.note3}`}>♪</div>
          <div className={`${classes.note} ${classes.note4}`}>♪</div>
          <div className={`${classes.note} ${classes.note5}`}>♪</div>
        </div>
      </div>
      <p className={classes.loadingText}>Загрузка партитуры...</p>
    </div>
  );
};
