import { useState } from "react";
import { TelegramHover } from "../Assets/Icons/TelegramHover";
import { VKHover } from "../Assets/Icons/VKHover";
import { YouTube } from "../Assets/Icons/YouTube";
import { YouTubeHover } from "../Assets/Icons/YouTubeHover";
import classes from "../ContactsAndFeedback/сontactsAndFeedback.module.css";
import "./сontactsAndFeedback.module.css";

export const Contacts = () => {
  const [hover, setHover] = useState(false);

  const onMouseOver = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={classes.wrapContent}>
      <h3>Контакты</h3>
      <div className={classes.text} style={{ fontSize: "1.3rem" }}>
        Мне нравится обсуждать новые проекты и методики. Пожалуйста, поделитесь
        как можно большей информацией, чтобы я могла получить максимальную
        информацию о своей работе.
      </div>
      <div className={classes.linksWrap}>
        <a
          className={`${classes.link} ${classes.linkVK}`}
          href="https://vk.com/childrenmusic23"
        >
          <VKHover />
        </a>
        <a
          className={`${classes.link} ${classes.linkTelegram}`}
          href="https://t.me/Selivan4iki"
        >
          <TelegramHover />
        </a>
        <a
          onMouseEnter={onMouseOver}
          onMouseLeave={onMouseLeave}
          className={`${classes.link} ${classes.linkYouTube}`}
          href="https://www.youtube.com/channel/UCECn-HcP74Azy_ASo6gBEXQ"
        >
          {hover ? <YouTubeHover /> : <YouTube />}
        </a>
      </div>
    </div>
  );
};
