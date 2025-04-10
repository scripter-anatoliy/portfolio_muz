import { personalData } from "./personalData";
import "./aboutMe.module.css";
import classes from "./aboutMe.module.css";
import { NumberAndDiplomas } from "./NumberAndDiplomas";

export const AboutMe = () => {
  return (
    <>
      <div
        id="part-2"
        className={classes.wrapContent}
        style={{ display: "flex" }}
      >
        <div>
          <div className={`${classes.wrapWelcome} ${classes.display}`}>
            <span
              data-aos="fade-in"
              data-aos-duration="2000"
              className={`${classes.welcomeFio} ${classes.display}`}
            >
              Селиванова Татьяна Сергеевна
            </span>
          </div>
          <div className={classes.wrapText}>
            <span data-aos="fade-in" data-aos-duration="2000">
              Работаю музыкальным руководителем в МБОУ "Школа №176" г.о. Самара
              (дошкольные группы). Квалификационная категория: высшая
            </span>
            <span data-aos="fade-in" data-aos-duration="2000">
              <b>Музыкальный руководитель - это не просто профессия</b>, это
              состояние души, возможность постоянно находиться в мире детства, в
              мире сказки и фантазии.
            </span>
            <span
              style={{ textDecoration: "underline" }}
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              Образование:
            </span>
            <span data-aos="fade-in" data-aos-duration="2000">
              2004-2008гг. Самарский социально-педагогический колледж,
              Музыкальное отделение. Квалификация - учитель музыки, музыкальный
              руководитель в детском саду.
            </span>
            <span data-aos="fade-in" data-aos-duration="2000">
              2008-2012гг. Московский городской педагогический университет
              (Самарский филиал). Квалификация - педагог-психолог.
            </span>
            <span data-aos="fade-in" data-aos-duration="2000">
              2015-2016гг. Самарский государственный социально-педагогический
              университет.
            </span>
            <span data-aos="fade-in" data-aos-duration="2000">
              Квалификация - учитель-логопед.
            </span>
          </div>
        </div>
        <NumberAndDiplomas />
      </div>
      <div className={classes.wrapPersonalData}>
        {personalData.map((item) => (
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            key={item.id}
            className={classes.personalDataBlock}
          >
            <span className={classes.personalDataTitle}>{item.title}</span>
            {item.title === "Email:" ? (
              <span className={classes.personalDataDescription}>
                <a href={`mailto:${item.description}`}>{item.description}</a>
              </span>
            ) : (
              <span className={classes.personalDataDescription}>
                {item.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
