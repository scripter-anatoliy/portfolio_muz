"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { ContactsAndFeedback } from "../ContactsAndFeedback/ContactsAndFeedback";
import ContentForParents from "../ContentForParents/ContentForParents";
import DevelopingEnvironment from "../DevelopingEnvironment/DevelopingEnvironment";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { NewsLine } from "../NewsLine/NewsLine";
import { Publications } from "../Publications/Publications";
import { ScrollToTopButton } from "../StyledComponents/ScrollToTopButton";
import { Spinner } from "../StyledComponents/Spinner";
import { StyledContainer } from "../StyledComponents/StyledContainer";
import classes from "./landing.module.css";

export const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    );
  }

  const handleOutsideClick = () => {
    setShow(false);
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShow(!show);
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
      >
        <AboutMe />
      </StyledContainer>
      <StyledContainer
        id="part-3"
        title="Лента новостей"
        description="Посмотрите, какие события у нас"
        backgroundStyle={"rgb(237 160 206)"}
      >
        <NewsLine />
      </StyledContainer>
      <ContentForParents />
      <StyledContainer
        id="part-5"
        title="Видеогалерея"
        description="Творчество - наше всё"
        backgroundStyle={"rgb(160 237 163)"}
      >
        <DevelopingEnvironment />
      </StyledContainer>
      <StyledContainer
        id="part-6"
        title="Методическая копилка"
        description="Мой педагогический опыт"
        backgroundStyle={"#ffffff"}
      >
        <Publications />
      </StyledContainer>
      <ContactsAndFeedback />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
