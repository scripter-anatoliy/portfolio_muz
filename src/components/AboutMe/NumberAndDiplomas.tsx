import { Image } from "antd";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import diplomaEight from "../Assets/Diplomas/diplomaEight.jpg";
import diplomaEleven from "../Assets/Diplomas/diplomaEleven.jpg";
import diplomaFifteen from "../Assets/Diplomas/diplomaFifteen.jpg";
import diplomaFour from "../Assets/Diplomas/diplomaFour.jpg";
import diplomaFourteen from "../Assets/Diplomas/diplomaFourteen.jpg";
import diplomaNine from "../Assets/Diplomas/diplomaNine.jpg";
import diplomaOne from "../Assets/Diplomas/diplomaOne.jpg";
import diplomaSeven from "../Assets/Diplomas/diplomaSeven.jpg";
import diplomaSix from "../Assets/Diplomas/diplomaSix.jpg";
import diplomaTen from "../Assets/Diplomas/diplomaTen.jpg";
import diplomaThirteen from "../Assets/Diplomas/diplomaThirteen.jpg";
import diplomaThree from "../Assets/Diplomas/diplomaThree.jpg";
import diplomaTwelve from "../Assets/Diplomas/diplomaTwelve.jpg";
import diplomaTwo from "../Assets/Diplomas/diplomaTwo.jpg";
import certificateOne from "../Assets/RefresherCourses/certificateOne.jpg";
import certificateThree from "../Assets/RefresherCourses/certificateThree.jpg";
import certificateTwo from "../Assets/RefresherCourses/certificateTwo.jpg";
import { StyledButton } from "../StyledComponents/StyledButton";
import "./aboutMe.module.css";
import classes from "./aboutMe.module.css";

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
      }, 200); // Измените значение 100 на нужное вам значение задержки (в миллисекундах)

      return () => clearInterval(interval);
    }
  }, [currentNumber, 40, showElement]);

  useEffect(() => {
    const handleScroll = () => {
      // const element = document.getElementById('target-element');
      setShowElement(true);
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

interface IImagesData {
  id: string;
  image: string;
}

const imagesDiplomasData: IImagesData[] = [
  { id: v4(), image: diplomaOne },
  { id: v4(), image: diplomaTwo },
  { id: v4(), image: diplomaThree },
  { id: v4(), image: diplomaFour },
  { id: v4(), image: diplomaSix },
  { id: v4(), image: diplomaSeven },
  { id: v4(), image: diplomaEight },
  { id: v4(), image: diplomaNine },
  { id: v4(), image: diplomaTen },
  { id: v4(), image: diplomaEleven },
  { id: v4(), image: diplomaTwelve },
  { id: v4(), image: diplomaThirteen },
  { id: v4(), image: diplomaFourteen },
  { id: v4(), image: diplomaFifteen },
];
const imagesQualificationData: IImagesData[] = [
  { id: v4(), image: certificateOne },
  { id: v4(), image: certificateTwo },
  { id: v4(), image: certificateThree },
];
