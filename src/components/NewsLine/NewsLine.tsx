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
                    imageUrl: 'https://downloader.disk.yandex.ru/preview/dcbba2149c0e944e5d631e68a8753acdb89c8e6821b153299f272cfd3d2900ae/648076a4/9asrvxLCb7hD8cyJ8A5pAUjhvHT3kAb9SS0oVUT0hJx9iRvW26HWRzgLmCRMvxi1OTY8ddjImGSlshtbPN2kpg%3D%3D?uid=0&filename=%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2023-06-01_17-39-08-204.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
                },{
                    id: v4(),
                    imageUrl: 'https://disk.yandex.ru/i/Ez6rQcM88C47fQ'
                },{
                    id: v4(),
                    imageUrl: 'https://disk.yandex.ru/i/Y2vWe5NnFqOEPA'
                },{
                    id: v4(),
                    imageUrl: 'https://disk.yandex.ru/i/3Xmc5Z05P4sPLw'
                },{
                    id: v4(),
                    imageUrl: 'https://disk.yandex.ru/i/uYYPRhxXaNPSXQ'
                },{
                    id: v4(),
                    imageUrl: 'https://disk.yandex.ru/i/gsDGM0S82GdEZg'
                },
            ]
        }
    },
]