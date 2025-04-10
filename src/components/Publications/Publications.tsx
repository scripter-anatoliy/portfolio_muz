import { Button, Tooltip } from "antd";
import { v4 } from "uuid";
import "./publications.module.css";
import classes from "./publications.module.css";
import { IDateParents } from "../ContentForParents/ContentForParentsData";

export const Publications = () => {
  return (
    <div className={classes.wrapContainer}>
      <div style={{ width: "50%" }}>
        <div className={classes.title}>Публикации</div>
        <div className={classes.publications}>
          {publications.map((publication) => (
            <div className={classes.publication} key={publication.id}>
              <div className={classes.publicationName}>{publication.title}</div>
              <div className={classes.dataText}>{publication.data}</div>
              {/*<div className={classes.linkSite}>{publication.linkSite}</div>*/}
              <Tooltip title={publication.linkSite} color="#ffd4c1">
                <Button size="small" className={classes.button} type="primary">
                  <a href={publication.link}>Перейти к публикации</a>
                </Button>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={classes.title}>Материалы для занятий</div>
        <div className={classes.publications}>
          {scenarios.map((publication) => (
            <div className={classes.publication} key={publication.id}>
              <div className={classes.publicationName}>{publication.title}</div>
              <div className={classes.dataText}>{publication.data}</div>
              {/*<div className={classes.linkSite}>{publication.linkSite}</div>*/}
              <Tooltip title={publication.linkSite} color="#ffd4c1">
                <Button size="small" className={classes.button} type="primary">
                  <a href={publication.link}>Перейти к публикации</a>
                </Button>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface IPublications extends IDateParents {
  linkSite: string;
  link: string;
  data?: string;
}

export const publications: IPublications[] = [
  {
    id: v4(),
    title:
      "Музыкальное занятие для детей средней группы «Прислушайся к звукам вокруг нас»",
    data: "17 июня 2023г.",
    linkSite: "https://infourok.ru/",
    link: "https://infourok.ru/muzykalnoe-zanyatie-dlya-detej-srednej-gruppy-prislushajsya-k-zvukam-vokrug-nas-6688853.html",
  },
  {
    id: v4(),
    title:
      'Сценарий выпускного в старше-подготовительной группе "В школу провожаем мы своих друзей"',
    data: "17 июня 2023г.",
    linkSite: "https://музрукдоу.рф/",
    link: "https://музрукдоу.рф/viewtopic.php?p=18542#p18542",
  },
  {
    id: v4(),
    title:
      'Конспект интегрированной музыкальной НОД с использованием новых образовательных технологий "Радуга" для детей младшей группы',
    data: "14 мая 2023г.",
    linkSite: "http://school176.ru/",
    link: "http://school176.ru/info/96 ",
  },
  {
    id: v4(),
    title:
      "Проект для интерактивной доски в программе SmartNotebook «Самара – моя малая Родина!»",
    data: "15 февраля 2023г.",
    linkSite: "http://www.edcommunity.ru/",
    link: "http://www.edcommunity.ru/lessons/samara---moya-malaya-rodina/",
  },
  {
    id: v4(),
    title: "Сценарий вокально-хоровой НОД",
    data: "20 января 2023г.",
    linkSite: "http://school176.ru/",
    link: "http://school176.ru/info/96 ",
  },
  {
    id: v4(),
    title:
      'Сценарий мероприятия "Юные таланты" для детей старшей - подготовительной групп',
    data: "28 ноября 2022г.",
    linkSite: "https://ped-kopilka.ru/",
    link: "https://ped-kopilka.ru/blogs/tatjana-sergevna-konovalova/yunye-talanty.html",
  },
];

export const scenarios: IPublications[] = [
  {
    id: v4(),
    title: "Конспект уличного мероприятия ко Дню защиты детей",
    data: "1 июня 2023г.",
    linkSite:
      "https://360.yandex.ru/disk/ergferfeafwegeerggefergevvergsgsegsegeseg",
    link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fmb%2B12sqa5%2BXgovP38jNCqZ55sjkWm0zspflmxsQ0H4iPMJ3JAZ%2BrqFzWZpvV2Pwqq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=1%20%D0%B8%D1%8E%D0%BD%D1%8F%202023.docx&nosw=1",
  },
  {
    id: v4(),
    title: 'Сценарий выпускного "Морское путешествие"',
    data: "25 мая 2023г.",
    linkSite: "https://360.yandex.ru/disk/",
    link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FfbJZLHFR2P4W%2BrenBhiVgQyTVZGwiwtuNp39laZTgFvQaqje6uZCSTmdjx%2FGYIcGq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%92%D1%8B%D0%BF%D1%83%D1%81%D0%BA%202023%201%20%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0.docx&nosw=1",
  },
  {
    id: v4(),
    title:
      "Конспект развлечения на улице, посвящённое Дню космонавтики 12 апреля",
    data: "12 апреля 2023г.",
    linkSite: "https://360.yandex.ru/disk/",
    link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FQ6WRyPiX2ExXxa1u9Qo6xVn6tJ2kvXCxdP87EwimdYC%2B5yixEPCMWnKwE7QxV%2FRLq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%202023.docx&nosw=1",
  },
  {
    id: v4(),
    title:
      'Сценарий праздника 8 марта во второй младшей группе "Волшебный цветок для мамы"',
    data: "15 марта 2023г.",
    linkSite: "https://360.yandex.ru/disk/",
    link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fcp2pE4ivJTNtbBTFcztFwowLGaFVh3YGEq3oW0jadg1KQYG5%2Fia5RwPRr90Gcr67q%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=8%20%D0%BC%D0%B0%D1%80%D1%82%D0%B0%202023.%20%D0%9C%D0%BB%D0%B0%D0%B4%D1%88%D0%B0%D1%8F%20%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0.docx&nosw=1",
  },
  {
    id: v4(),
    title: 'Сценарий праздника 8 марта в средней группе "Художник и краски"',
    data: "3 марта 2023г.",
    linkSite: "https://360.yandex.ru/disk/",
    link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FYNur0eS61zNuF1qUE2g95lQgrnkv3j2Cx3eWMhXYgUqR0AXF3qiue1ACbZJY8eRAq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=8%20%D0%BC%D0%B0%D1%80%D1%82%D0%B0%202023%20%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F.docx&nosw=1",
  },
  {
    id: v4(),
    title:
      'Сценарий праздника 8 марта в старшей группе "Весна пришла, нам праздник принесла"',
    data: "2 марта 2023г.",
    linkSite: "https://360.yandex.ru/disk/",
    link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FLGGW3KTNrMUz31rNZ9lpEhjutAh0V2yocrE9RuWkeA7Rs9DwrxkJfAKvMtGTZfoEq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=8%20%D0%BC%D0%B0%D1%80%D1%82%D0%B0%202023.%20%D1%81%D1%82%D0%B0%D1%80%D1%88%D0%B0%D1%8F.docx&nosw=1",
  },
];
