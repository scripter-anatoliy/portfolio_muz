import { Button } from "antd";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { ArrowDown } from "../Assets/Icons/ArrowDown";
import "./main.module.css";
import main from "./main.module.css";

export const Main = () => {
  const scrollOnContacts = () => {};

  return (
    <div id="part-1" className={main.wrap}>
      <div className={main.container}>
        <div className={main.greeting}>
          <div>Приветствую, я - Татьяна,</div>
          <div>музыкальный руководитель!</div>
          <div className={main.typewriter}>
            <Typewriter
              options={{
                strings: ["Дети", "Музыка", "Счастье"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className={main.buttonsGroup}>
            <Button
              className={main.button}
              onClick={scrollOnContacts}
              size="large"
              type="primary"
            >
              <Link
                to="part-4"
                smooth={true}
                duration={2000}
                offset={-40}
                spy
                href="#contentForParent"
              >
                Родители, вам сюда
              </Link>
            </Button>
            <Button
              className={main.wrapButtonLink}
              onClick={scrollOnContacts}
              type="link"
              size="small"
            >
              <Link
                to="part-7"
                smooth={true}
                duration={2000}
                offset={-40}
                spy
                href="#contact"
              >
                Контакты
              </Link>
              <ArrowDown />
            </Button>
          </div>
        </div>
        <div className={main.wrapAvatar}>
          <div className={main.avatar}></div>
        </div>
      </div>
    </div>
  );
};
