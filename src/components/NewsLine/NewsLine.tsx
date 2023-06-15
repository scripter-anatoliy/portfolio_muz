import React, {useState} from "react";
import './newsLine.module.css';
import classes from './newsLine.module.css';
import {v4} from "uuid";
import {Carousel, Modal} from "antd";
import {ModalCustom} from "./ModalCustom";

export interface IData {
    id: string
    title: string
    images: IImages[]
    description: IDescription
    splashPictureUrl: string
}

export interface IDescription {
    title: string
    description: string
    date: string
}

export interface IImages {
    id: string,
    imageUrl: string
}

export interface IModal {
    images: IImages[]
    description: IDescription
}


export const NewsLine = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [objectModal, setObjectModal] = useState<IData | null>(null);

    const showModal = (object: IData) => {
        setIsModalOpen(true);
        setObjectModal(object)
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classes.wrapGrid}>
            <>
                {data.map((item) =>
                    <div key={item.id}>
                        <div className={classes.wrapCard} onClick={() => showModal(item)}>
                            <div className={classes.imageBlockHover}>Посмотреть
                                <img className={classes.wrapCardImage}
                                     src={item.splashPictureUrl}
                                     alt="Picture"/>
                            </div>
                        </div>

                    </div>
                )}
                {objectModal &&
                <ModalCustom modal={objectModal} handleOk={handleOk} handleCancel={handleCancel}
                             isModalOpen={isModalOpen}/>
                }
            </>
        </div>
    );
}


export const data: IData[] = [
    {
        id: v4(),
        title: "12 июня - День России!",
        splashPictureUrl: "https://downloader.disk.yandex.ru/preview/b8198692112998aff3d1f5f3eb94514cf3cb50a8c4026bba1ed2517dfec8a195/648a3767/ptga6JygSPyXxeyv_R4EfT0ENVot4dPLjwWrFa2yEA2p1_59-_xDE2yB9i13WEYIugmkpsk-YtfSbB_y6SzSnw%3D%3D?uid=0&filename=%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
        description: {
            title: '',
            description: 'В нашем детском саду прошёл яркий праздник, посвящённый Дню России. Повторили с ребятами государственные символы нашей страны (герб, флаг и гимн). Полетали на самолёте в увлекательное путешествие по нашей огромной стране. Побывали в гостях у Бабы-Яги. Вспомнили про русские народные инструменты (балалайка, гармонь) и сувениры (русская матрёшка). А также поиграли в русские народные игры «Матрёшка», «Золотые ворота», «Игра с флажком». Поздравляем всех с Днём России и дарим песню в исполнении музыкальных руководителей: Селивановой Татьяны Сергеевны и Кадеркиной Екатерины Сергеевны - «Россия-матушка»! Смотрите видео на нашем канале:',
            date: '12 июня 2023г.'
        },
        images: [
            {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/232903a3d75bfc6423798433bbe9af981cabc01f222653e574c2b1698cb98b5b/648ace8b/d19MzWOydBqsA1ZdA5DgJQUUApyU86xiMKxV623vAn5AeBVdefUkvqpGmYNkwDWK3I8eYdFt20npw15sT6VS1A%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-13_16-23-36-140.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/dc79c4b4846e756b8da95e395fc8bdeecb3b9844ee2c03c9877817bf3b983df3/648a3a68/f5eW_PjyKOvU13DltiyJ7uV_IG4Us9Zt3w7B6_uh3ZDkKT4jPnnlHXWqQ2TIeL3UmVRQH20DCnXAd-96hM43-w%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-13_16-23-37-672.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/3b2d0cc0684156bf107fb552e19628019c07d858b530adb41876c7c4e1d24bba/648a3a42/d19MzWOydBqsA1ZdA5DgJQUUApyU86xiMKxV623vAn5AeBVdefUkvqpGmYNkwDWK3I8eYdFt20npw15sT6VS1A%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-13_16-23-36-140.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/954a5d69dcf7d1718c4a69860dc16c7bc3a599dc422b42dc6577d46e2126e6e7/648a3a7d/9NtHcS-5clzzfB15qlz4q-V_IG4Us9Zt3w7B6_uh3ZBI9qiZwDZzsvjsJQ2xBLTC7YhLitJmAWQuGzX5qMAr5g%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-13_16-23-37-796.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/896d9708fd5f23ec1c7ced0f6c65fe2cb4784825b2da17ebece2244742e12b86/648a3a8a/BcZxM6u45qttoOYKSUMq7uV_IG4Us9Zt3w7B6_uh3ZChH6huhkF_XQ5LzhWCqM5niv7VolvsTrMALIiGL_5erQ%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-13_16-23-38-041.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/b361045f9036d37236c15cad01fa25b9f570d765a804279405a35e95b7a09cad/648a3a97/0Y4nuoQ3fBwRnhvZvjuBrOV_IG4Us9Zt3w7B6_uh3ZDMVvSfVkHtjNQYVpT4NPpCogi-LWIrAX0v8IlerwXgOg%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-13_16-23-38-172.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }
        ]
    },
    {
        id: v4(),
        title: 'День защиты детей!',
        splashPictureUrl: 'https://downloader.disk.yandex.ru/preview/34cceeeda016606e7779a8159b2727d50071df42e1195a56ccc8d09a37377e47/648a4747/je3xquH4ttXPTATZwleLz1lWd33krZyzGZZA-GTel9aTzhmFG_xZWZS13pB5QiOa5G-wGmLi3fdd4vExoUIiTw%3D%3D?uid=0&filename=%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0_.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        description: {
            title: 'День защиты детей!',
            description: 'С праздником детства, с Днём защиты детей!!! Сегодня мы вместе с Веселинкой-Смешинкой встретили первый день лета играми и плясками. «Передавали» улыбку в командах, поиграли с танцевальной шляпой, в весёлые игры с мячами, порисовали мелками, спели знакомые всем песни о лете и дружбе, потанцевали. Затем воспитатели провели беседы на темы безопасности и правил поведения на улице. Дети получили массу положительных эмоций и впечатлений, а также понимание того, что их окружают люди, которые заботятся о них и защищают их права.',
            date: '1 июня 2023г.'
        },
        images: [
            {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/5602d7e72df886dabc073655fbb9b4247a6358a33bab42412541a575a40f4ebf/648acf31/9asrvxLCb7hD8cyJ8A5pAUjhvHT3kAb9SS0oVUT0hJx9iRvW26HWRzgLmCRMvxi1OTY8ddjImGSlshtbPN2kpg%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-204.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/dad675ac1901fb8fb7814e69d51708313249a173b387bbe4f9f5c2666e8495a8/6480faa6/loAh2L_1uxh-ge-t6rxsM5D2l5mhOdz61JeBe7AmHMU757TTC0zty4fJkhQYjMCETmzgA02IOWoGin1IjXdMaw%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-377.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/461eb4ebc267c85a10155411aa469ccf79de5c3a1504b639c7fb4359bed44407/6480fb17/SYRKy-8ucdYwX8QUEYRsR0jhvHT3kAb9SS0oVUT0hJwwl3w1iTiZdmQkKKZBk8GDYZkTByU4aoaroDp_wO5dZg%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-492.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/a9dbd1dff4458d64a5ada17f960fe77e1232cef2208f34a1bf5a2f1eb3c21bfa/6480fb95/rQOoz3R_JoGCylLs7R8SsEjhvHT3kAb9SS0oVUT0hJwyAfnSuLreLmniA0oforDLG5coBo13sPQ3G2k64ei54w%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-876.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/7515074c162803f6f1fda39b4e08dbb4ec80ed29951bbe8ebb8d9fbde4ee1f84/6480fb4b/ltebrBpC1Rdk51OukcYiw0jhvHT3kAb9SS0oVUT0hJxWiZl_ABQFkmNSMxWgO4gfMIGIYfqdPZ3bYDTVzvwmlQ%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-631.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }
        ]
    }, {
        id: v4(),
        title: 'тест',
        splashPictureUrl: 'https://downloader.disk.yandex.ru/preview/b8198692112998aff3d1f5f3eb94514cf3cb50a8c4026bba1ed2517dfec8a195/648a3767/ptga6JygSPyXxeyv_R4EfT0ENVot4dPLjwWrFa2yEA2p1_59-_xDE2yB9i13WEYIugmkpsk-YtfSbB_y6SzSnw%3D%3D?uid=0&filename=%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        description: {
            title: 'erterter',
            description: 'dfgldflfl;dg;ldf,',
            date: '1 июня 2023г.'
        },
        images: [
            {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/1308d3d8e709e239f9cef3079c5c88e6b22406cc48c44a74d59781573b4053dc/6480fa7e/9asrvxLCb7hD8cyJ8A5pAUjhvHT3kAb9SS0oVUT0hJx9iRvW26HWRzgLmCRMvxi1OTY8ddjImGSlshtbPN2kpg%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-204.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/dad675ac1901fb8fb7814e69d51708313249a173b387bbe4f9f5c2666e8495a8/6480faa6/loAh2L_1uxh-ge-t6rxsM5D2l5mhOdz61JeBe7AmHMU757TTC0zty4fJkhQYjMCETmzgA02IOWoGin1IjXdMaw%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-377.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/461eb4ebc267c85a10155411aa469ccf79de5c3a1504b639c7fb4359bed44407/6480fb17/SYRKy-8ucdYwX8QUEYRsR0jhvHT3kAb9SS0oVUT0hJwwl3w1iTiZdmQkKKZBk8GDYZkTByU4aoaroDp_wO5dZg%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-492.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/a9dbd1dff4458d64a5ada17f960fe77e1232cef2208f34a1bf5a2f1eb3c21bfa/6480fb95/rQOoz3R_JoGCylLs7R8SsEjhvHT3kAb9SS0oVUT0hJwyAfnSuLreLmniA0oforDLG5coBo13sPQ3G2k64ei54w%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-876.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }, {
                id: v4(),
                imageUrl: 'https://downloader.disk.yandex.ru/preview/7515074c162803f6f1fda39b4e08dbb4ec80ed29951bbe8ebb8d9fbde4ee1f84/6480fb4b/ltebrBpC1Rdk51OukcYiw0jhvHT3kAb9SS0oVUT0hJxWiZl_ABQFkmNSMxWgO4gfMIGIYfqdPZ3bYDTVzvwmlQ%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-631.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
            }
        ]
    },
]