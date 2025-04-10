import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { v4 } from "uuid";
import classes from "./burgerMenu.module.css";

interface BurgerMenuProps {
  setShow: (value: boolean) => void;
  show: boolean;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ setShow, show }) => {
  // const scrollToTarget = (link: string) => {
  //     console.log('Anchor:OnChange', link);
  //     if (link === '#part-5') {
  //         console.log('попали', link);
  //         const targetElement = document.getElementById("part-5");
  //
  //         if (targetElement) {
  //             console.log(targetElement.scrollIntoView, link);
  //             targetElement.scrollIntoView({behavior: 'smooth'});
  //         }
  //     }
  // };

  const handleMenuClick = () => {
    setShow(false);
    // Дополнительная логика при нажатии на пункт меню
    // Можно добавить скролл к нужному элементу на странице
  };

  return (
    <div className={`${classes.wrap} ${show ? classes.visible : ""}`}>
      <Menu
        mode="vertical"
        theme="light"
        style={{ display: show ? "block" : "none" }}
        onSelect={handleMenuClick}
      >
        {menuItem.map((item) => (
          <Menu.Item key={item.id}>
            <Link
              onClick={() => setShow(false)}
              to={item.link}
              smooth={true}
              duration={2000}
              offset={-40}
              spy
              href={item.href}
            >
              {item.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

interface IMenu {
  id: string;
  link: string;
  name: string;
  href: string;
}

const menuItem: IMenu[] = [
  {
    id: v4(),
    link: "part-1",
    name: "Главная",
    href: "#main",
  },
  {
    id: v4(),
    link: "part-2",
    name: "Обо мне",
    href: "#aboutMe",
  },
  {
    id: v4(),
    link: "part-3",
    name: "Новостная лента",
    href: "#newsLine",
  },
  {
    id: v4(),
    link: "part-4",
    name: "Для родителей",
    href: "#contentForParent",
  },
  {
    id: v4(),
    link: "part-5",
    name: "Творческая копилка",
    href: "#developingEnvironment",
  },
  {
    id: v4(),
    link: "part-6",
    name: "Публикации",
    href: "#publications",
  },
  {
    id: v4(),
    link: "part-7",
    name: "Контакты",
    href: "#contact",
  },
];
