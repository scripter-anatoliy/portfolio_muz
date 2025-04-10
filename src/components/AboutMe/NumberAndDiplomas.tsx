import { Image } from "antd";
import { useEffect, useState } from "react";
import "./aboutMe.module.css";
import classes from "./aboutMe.module.css";
import { imagesDiplomasData } from "./diplomasData";
import { imagesQualificationData } from "./certificatesData";
import { StyledButton } from "../StyledComponents/StyledButton";

export const NumberAndDiplomas = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(1);

  const [showElement, setShowElement] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentButtonClick, setCurrentButtonClick] = useState("");

  useEffect(() => {
    if (showElement) {
      const interval = setInterval(() => {
        if (currentNumber < 15) {
          setCurrentNumber(currentNumber + 1);
        } else {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [currentNumber, showElement]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${classes.wrapNumber}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        setShowElement(isVisible);

        // Сбрасываем currentNumber если элемент стал невидимым
        if (!isVisible) {
          setCurrentNumber(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onOpenImages = (value: string) => {
    switch (value) {
      case "diplomas": {
        setVisible(true);
        setCurrentButtonClick(value);
        return;
      }
      case "qualification": {
        setVisible(true);
        setCurrentButtonClick(value);
        return;
      }
      default:
        return;
    }
  };

  return (
    <div className={classes.wrapNumber}>
      {showElement && <div className={classes.number}>{currentNumber}</div>}
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-out-cubic"
        className={classes.experienceText}
      >
        <span>Лет </span>
        <span>
          <b>опыта</b>
        </span>
      </div>
      <div className={classes.buttonGroup}>
        <StyledButton
          onClick={() => onOpenImages("diplomas")}
          tooltip={"Мои дипломы"}
          title={"Дипломы"}
        />
        <StyledButton
          onClick={() => onOpenImages("qualification")}
          tooltip={"Курсы повышения квалификации"}
          title={"Квалификации"}
        />
      </div>
      {currentButtonClick === "diplomas" && (
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
          >
            {imagesDiplomasData.map((image) => (
              <Image id={image.id} src={image.image} />
            ))}
          </Image.PreviewGroup>
        </div>
      )}
      {currentButtonClick === "qualification" && (
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
          >
            {imagesQualificationData.map((image) => (
              <Image id={image.id} src={image.image} />
            ))}
          </Image.PreviewGroup>
        </div>
      )}
    </div>
  );
};
