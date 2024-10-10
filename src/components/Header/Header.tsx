import React, { useEffect, useState } from "react";
import "./header.module.css";

import Telegram from "../Assets/Icons/Telegram";
import TrebleClef from "../Assets/Icons/TrebleClef";
import { VkIcon } from "../Assets/Icons/VkIcon";
import { YouTubeIcon } from "../Assets/Icons/YouTubeIcon";
import { BurgerMenu } from "../Menu/BurgerMenu";
import header from "./header.module.css";

export interface HeaderMenuProps {
  setShow: (value: boolean) => void;
  show: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Header: React.FC<HeaderMenuProps> = ({
  setShow,
  show,
  onClick,
}) => {
  const [scroll, setScroll] = useState(false);

  const name = "Селиванова".toUpperCase();

  function scrollHandler() {
    if (window.scrollY >= 5) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  // window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    // Очищаем слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={scroll ? `${header.wrap} ${header.mySticky}` : header.wrap}>
      <div className={header.container}>
        <div className={`${header.display} ${header.name}`}>{name}</div>
        <div className={header.display}>
          <a className={header.display} href="https://t.me/Selivan4iki">
            <Telegram />
          </a>
          <a className={header.display} href="https://vk.com/childrenmusic23">
            <VkIcon />
          </a>
          <a
            className={header.display}
            href="https://www.youtube.com/channel/UCECn-HcP74Azy_ASo6gBEXQ"
          >
            <YouTubeIcon />
          </a>
          <div
            className={`${header.burgerMenu} ${header.display}`}
            onClick={(e) => onClick(e)}
          >
            <TrebleClef />
          </div>
        </div>
      </div>
      <BurgerMenu setShow={setShow} show={show} />
    </div>
  );
};
