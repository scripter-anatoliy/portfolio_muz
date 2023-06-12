import React, {useState} from "react";
import './newsLine.module.css';
import classes from './newsLine.module.css';
import {v4} from "uuid";
import {ModalCustom} from "./ModalCustom";

export interface IData {
    id: string
    title: string
    modal: IModal
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
    id: string
    images: IImages[]
    description: IDescription
}


export const NewsLine = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classes.wrapGrid}>
            {data.map((item) =>
                <>
                    <div className={classes.wrapCard} onClick={showModal}>

                        <div className={classes.imageBlockHover}>Посмотреть
                            <img className={classes.wrapCardImage}
                                 src={item.splashPictureUrl}
                                 alt="Picture"/>
                        </div>
                    </div>
                    <ModalCustom modal={item.modal} handleOk={handleOk} handleCancel={handleCancel}
                                 isModalOpen={isModalOpen}/>
                </>
            )}
        </div>
    );
}


export const data: IData[] = [
    {
        id: v4(),
        title: 'тест',
        splashPictureUrl: "https://downloader.disk.yandex.ru/preview/23b01de9978a794aa18250ee6f63e90e395e465bea326c07bd3e4b699d0ca264/648076da/je3xquH4ttXPTATZwleLz1lWd33krZyzGZZA-GTel9aTzhmFG_xZWZS13pB5QiOa5G-wGmLi3fdd4vExoUIiTw%3D%3D?uid=0&filename=%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0_.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
        modal: {
            id: v4(),
            description: {
                title: 'Описание мероприятия',
                description: 'С праздником детства, с Днём защиты детей!!! Вместе со Смешинкой-Веселинкой встретили первый день лета играми и плясками!',
                date: '1 июня 2023г.'
            },
            images: [
                {
                    id: v4(),
                    imageUrl: 'https://downloader.disk.yandex.ru/preview/1308d3d8e709e239f9cef3079c5c88e6b22406cc48c44a74d59781573b4053dc/6480fa7e/9asrvxLCb7hD8cyJ8A5pAUjhvHT3kAb9SS0oVUT0hJx9iRvW26HWRzgLmCRMvxi1OTY8ddjImGSlshtbPN2kpg%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-204.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
                },{
                    id: v4(),
                    imageUrl: 'https://downloader.disk.yandex.ru/preview/dad675ac1901fb8fb7814e69d51708313249a173b387bbe4f9f5c2666e8495a8/6480faa6/loAh2L_1uxh-ge-t6rxsM5D2l5mhOdz61JeBe7AmHMU757TTC0zty4fJkhQYjMCETmzgA02IOWoGin1IjXdMaw%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-377.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
                },{
                    id: v4(),
                    imageUrl: 'https://downloader.disk.yandex.ru/preview/461eb4ebc267c85a10155411aa469ccf79de5c3a1504b639c7fb4359bed44407/6480fb17/SYRKy-8ucdYwX8QUEYRsR0jhvHT3kAb9SS0oVUT0hJwwl3w1iTiZdmQkKKZBk8GDYZkTByU4aoaroDp_wO5dZg%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-492.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
                },{
                    id: v4(),
                    imageUrl: 'https://downloader.disk.yandex.ru/preview/a9dbd1dff4458d64a5ada17f960fe77e1232cef2208f34a1bf5a2f1eb3c21bfa/6480fb95/rQOoz3R_JoGCylLs7R8SsEjhvHT3kAb9SS0oVUT0hJwyAfnSuLreLmniA0oforDLG5coBo13sPQ3G2k64ei54w%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-876.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
                },{
                    id: v4(),
                    imageUrl: 'https://downloader.disk.yandex.ru/preview/7515074c162803f6f1fda39b4e08dbb4ec80ed29951bbe8ebb8d9fbde4ee1f84/6480fb4b/ltebrBpC1Rdk51OukcYiw0jhvHT3kAb9SS0oVUT0hJxWiZl_ABQFkmNSMxWgO4gfMIGIYfqdPZ3bYDTVzvwmlQ%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-631.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
                }
            ]
        }
    },
]