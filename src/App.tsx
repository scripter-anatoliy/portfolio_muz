import { Spin } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import classes from "./app.module.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { ContactsAndFeedback } from "./components/ContactsAndFeedback/ContactsAndFeedback";
import ContentForParents from "./components/ContentForParents/ContentForParents";
import DevelopingEnvironment from "./components/DevelopingEnvironment/DevelopingEnvironment";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { NewsLine } from "./components/NewsLine/NewsLine";
import { Publications } from "./components/Publications/Publications";
import { ScrollToTopButton } from "./components/StyledComponents/ScrollToTopButton";
import { StyledContainer } from "./components/StyledComponents/StyledContainer";

// interface IApp {
//     id: string,
//     content: React.ReactNode
// }

AOS.init();

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Когда загрузка завершена, установите isLoading в false
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Spin style={{ height: "auto" }} size="large" />
      </div>
    );
  }

  const handleOutsideClick = () => {
    // if (!event?.target.closest('.ant-menu')) {
    console.log("handleOutsideClick", show);
    setShow(false);
    // }
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShow(!show);
    console.log("onClick", e);
  };

  return (
    <div className={classes.body} onClick={handleOutsideClick}>
      <Header setShow={setShow} show={show} onClick={(e) => onClick(e)} />
      <Main />
      <StyledContainer
        id="part-2"
        title="Обо мне"
        description="Визитная карточка"
        backgroundStyle={"#ffffff"}
        children={<AboutMe />}
      />
      <StyledContainer
        id="part-3"
        title="Лента новостей"
        description="Посмотрите, какие события у нас"
        backgroundStyle={"rgb(237 160 206)"}
        children={<NewsLine />}
      />
      <ContentForParents />
      <StyledContainer
        id="part-5"
        title="Видеогалерея"
        description="Творчество - наше всё"
        backgroundStyle={"rgb(160 237 163)"}
        children={<DevelopingEnvironment />}
      />
      <StyledContainer
        id="part-6"
        title="Методическая копилка"
        description="Мой педагогический опыт"
        backgroundStyle={"#ffffff"}
        children={<Publications />}
      />
      <ContactsAndFeedback />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
