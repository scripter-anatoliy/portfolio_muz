import { useState } from "react";
import { v4 } from "uuid";
import { StyledButton } from "../StyledComponents/StyledButton";
import { ArchiveNews } from "./ArchiveNews";
import { ModalCustom } from "./ModalCustom";
import {
  imagesNewFive,
  imagesNewFour,
  imagesNewOne,
  imagesNewSix,
  imagesNewThree,
  imagesNewTwo,
} from "./images";
import "./newsLine.module.css";
import classes from "./newsLine.module.css";

export interface IData {
  id: string;
  title: string;
  images: IImages[];
  description: IDescription;
  splashPictureUrl: string;
  isArchive: boolean;
}

export interface IDescription {
  title: string;
  description: string;
  date: string;
}

export interface IImages {
  id: string;
  imageUrl: string;
}

export interface IModal {
  images: IImages[];
  description: IDescription;
}

export const NewsLine = () => {
  const [isModalOpenNew, setIsModalOpenNew] = useState(false);
  const [isModalOpenArсhiveNew, setIsModalOpenArсhiveNews] = useState(false);
  const [objectModal, setObjectModal] = useState<IData | null>(null);

  const archiveNews = data.filter((i) => i.isArchive);
  const noArchiveNews = data.filter((i) => !i.isArchive);

  const showModal = (object: IData, archive: boolean) => {
    setIsModalOpenNew(true);
    setObjectModal(object);
  };

  const handleOk = () => {
    setIsModalOpenNew(false);
  };

  const handleCancel = () => {
    setIsModalOpenNew(false);
  };

  return (
    <>
      <div className={classes.wrapGrid}>
        <>
          {noArchiveNews.map((item) => (
            <div
              key={item.id}
              className={classes.wrapCard}
              onClick={() => showModal(item, false)}
            >
              <div className={classes.imageBlock}>
                <div className={classes.imageBlockHover}>Посмотреть</div>
                <img
                  alt="default"
                  className={classes.wrapCardImage}
                  src={item.splashPictureUrl}
                />
              </div>
            </div>
          ))}
          <ModalCustom
            modal={objectModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
            isModalOpen={isModalOpenNew}
          />
        </>
      </div>
      <div style={{ marginTop: 36, maxWidth: 200 }}>
        <StyledButton
          onClick={() => setIsModalOpenArсhiveNews(true)}
          tooltip={"посмотреть архив новостей"}
          title={"Архив новостей"}
        />
        <ArchiveNews
          archiveNews={archiveNews}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpenArсhiveNew}
          object={objectModal}
          isModalOpenNew={isModalOpenNew}
          setIsModalOpenNew={setIsModalOpenNew}
          setIsModalOpenArсhiveNews={setIsModalOpenArсhiveNews}
          setObjectModal={setObjectModal}
        />
      </div>
    </>
  );
};

// сделать флаг, чтоб были основные новости и архивные, 2 массива и компоненту.

export const data: IData[] = [
  {
    id: v4(),
    title: "12 июня - День России!",
    splashPictureUrl: imagesNewOne.screenSaver,
    isArchive: false,
    description: {
      title: "",
      description:
        "В нашем детском саду прошёл яркий праздник, посвящённый Дню России. Повторили с ребятами государственные символы нашей страны (герб, флаг и гимн). Полетали на самолёте в увлекательное путешествие по нашей огромной стране. Побывали в гостях у Бабы-Яги. Вспомнили про русские народные инструменты (балалайка, гармонь) и сувениры (русская матрёшка). А также поиграли в русские народные игры «Матрёшка», «Золотые ворота», «Игра с флажком». Поздравляем всех с Днём России и дарим песню в исполнении музыкальных руководителей: Селивановой Татьяны Сергеевны и Кадеркиной Екатерины Сергеевны - «Россия-матушка»! Смотрите видео на нашем канале:",
      date: "12 июня 2024г.",
    },
    images: [
      {
        id: v4(),
        imageUrl: imagesNewOne.imageOne,
      },
      {
        id: v4(),
        imageUrl: imagesNewOne.imageTwo,
      },
      {
        id: v4(),
        imageUrl: imagesNewOne.imageThree,
      },
      {
        id: v4(),
        imageUrl: imagesNewOne.imageFour,
      },
      {
        id: v4(),
        imageUrl: imagesNewOne.imageFive,
      },
      {
        id: v4(),
        imageUrl: imagesNewOne.imageSix,
      },
    ],
  },
  {
    id: v4(),
    title: "День защиты детей!",
    splashPictureUrl: imagesNewTwo.screenSaver,
    isArchive: false,
    description: {
      title: "День защиты детей!",
      description:
        "С праздником детства, с Днём защиты детей!!! Сегодня мы вместе с Веселинкой-Смешинкой встретили первый день лета играми и плясками. «Передавали» улыбку в командах, поиграли с танцевальной шляпой, в весёлые игры с мячами, порисовали мелками, спели знакомые всем песни о лете и дружбе, потанцевали. Затем воспитатели провели беседы на темы безопасности и правил поведения на улице. Дети получили массу положительных эмоций и впечатлений, а также понимание того, что их окружают люди, которые заботятся о них и защищают их права.",
      date: "1 июня 2024г.",
    },
    images: [
      {
        id: v4(),
        imageUrl: imagesNewTwo.imageOne,
      },
      {
        id: v4(),
        imageUrl: imagesNewTwo.imageTwo,
      },
      {
        id: v4(),
        imageUrl: imagesNewTwo.imageThree,
      },
      {
        id: v4(),
        imageUrl: imagesNewTwo.imageFour,
      },
      {
        id: v4(),
        imageUrl: imagesNewTwo.imageFive,
      },
      {
        id: v4(),
        imageUrl: imagesNewTwo.imageSix,
      },
    ],
  },
  {
    id: v4(),
    title: "Выпускной",
    splashPictureUrl: imagesNewThree.screenSaver,
    isArchive: false,
    description: {
      title: "Выпускной",
      description:
        "Вот и пришло время проститься. Дорогие выпускники, уплывает ваш кораблик! Вы все подросли и готовы отправиться в Школьную страну!  Желаю вам всего самого наилучшего! В добрый путь, ребята!",
      date: "26 мая 2024г.",
    },
    images: [
      {
        id: v4(),
        imageUrl: imagesNewThree.imageOne,
      },
      {
        id: v4(),
        imageUrl: imagesNewThree.imageTwo,
      },
      {
        id: v4(),
        imageUrl: imagesNewThree.imageThree,
      },
      {
        id: v4(),
        imageUrl: imagesNewThree.imageFour,
      },
    ],
  },
  {
    id: v4(),
    title: "День Победы!",
    splashPictureUrl: imagesNewFour.screenSaver,
    isArchive: false,
    description: {
      title: "",
      description:
        'В преддверии Дня Победы воспитанники старших и подготовительных групп нашего детского сада подготовили праздничный концерт "Мы - наследники Великой Победы!" Мы помним! Мы гордимся! С праздником Победы! Память, ты жива. С праздником Победы! Мира всем, добра! Смотрите видео на нашем канале.',
      date: "4 мая 2024г.",
    },
    images: [
      {
        id: v4(),
        imageUrl: imagesNewFour.imageOne,
      },
      {
        id: v4(),
        imageUrl: imagesNewFour.imageTwo,
      },
      {
        id: v4(),
        imageUrl: imagesNewFour.imageThree,
      },
      {
        id: v4(),
        imageUrl: imagesNewFour.imageFour,
      },
    ],
  },
  {
    id: v4(),
    title: "День космонавтики!",
    splashPictureUrl: imagesNewFive.screenSaver,
    isArchive: false,
    description: {
      title: "",
      description:
        "Совместно с учениками Школы 176 провели мероприятие ко Дню космонавтики. Полетали на ракетах, поиграли в невесомость, вспомнили первого космонавта – Юрия Гагарина! Всё прошло весело и познавательно, у детей остались только положительные эмоции и гордость за нашу великую страну!",
      date: "12 апреля 2024г.",
    },
    images: [
      {
        id: v4(),
        imageUrl: imagesNewFive.imageOne,
      },
      {
        id: v4(),
        imageUrl: imagesNewFive.imageTwo,
      },
      {
        id: v4(),
        imageUrl: imagesNewFive.imageThree,
      },
      {
        id: v4(),
        imageUrl: imagesNewFive.imageFour,
      },
    ],
  },
  {
    id: v4(),
    title: "8 Марта - Международный Женский день!",
    splashPictureUrl: imagesNewSix.screenSaver,
    isArchive: false,
    description: {
      title: "",
      description:
        "В нашем детском саду прошли праздничные утренники, посвящённые 8 Марта!Папы танцевали с дочками, мамы участвовали в весёлых конкурсах. Было трогательно, волнительно и очень душевно! Спасибо всем за участие!Поздравляем С Международным Женским днём!",
      date: "4 марта 2024г.",
    },
    images: [
      {
        id: v4(),
        imageUrl: imagesNewSix.imageOne,
      },
      {
        id: v4(),
        imageUrl: imagesNewSix.imageTwo,
      },
      {
        id: v4(),
        imageUrl: imagesNewSix.imageThree,
      },
      {
        id: v4(),
        imageUrl: imagesNewSix.imageFour,
      },
      {
        id: v4(),
        imageUrl: imagesNewSix.imageFive,
      },
      {
        id: v4(),
        imageUrl: imagesNewSix.imageSix,
      },
    ],
  },
];
