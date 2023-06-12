import React from "react";
import classes from './contentForParents.module.css';
import {v4} from "uuid";
import image from "../Assets/imageParents.jpg"

function ContentForParents() {


    return (
        <div id='part-4' className={classes.wrap}>
            <div className={classes.container}>
                <div className={classes.wrapInfo}>
                    <div className={classes.info}>
                        <span className={classes.title}>Для родителей</span>
                        <span className={classes.description}>Консультации</span>
                        <div className={classes.list}>
                            {dateParents.map((item) =>
                                <div id={item.id} className={classes.listItem}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className={classes.picture}><img src={image} alt="image"/></div>
                </div>
            </div>
        </div>
    );
}

export default ContentForParents

interface IDateParents {
    id: string,
    title: string,
    link: string
}

export const dateParents: IDateParents[] = [
    {
        id: v4(),
        title: 'Домашние праздники для детей',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fk%2F7nk7X15bk3Qje%2BTlZm1Las94jgHiHn8b6nIARXinC2zzw4CqSuy31Hl8HKxGJJq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9A%D0%95%D0%A1-01%20%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%B0%D0%B7%D0%B4%20%20%D0%B4%D0%BB%D1%8F%20%D0%B4.pdf'
    }, {
        id: v4(),
        title: 'Музыка для всей семьи',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F0pyLjervusSuyT%2BJd%2FfVb1PxCC4zfKYq74RL71DcdhTwrEmKom%2Fgy9Ee040RW5Wsq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9A%D0%95%D0%A1-02%20%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B2%D1%81%D0%B5%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8.pdf&nosw=1'
    }, {
        id: v4(),
        title: 'Музыка и подготовка ко сну',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FU1VMFQxq6RBgM82%2BoX6LBCMYY7gqU69WDQtDiiiGZxSOeUZ5LgOBDS60e4z2pz2Eq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9A%D0%95%D0%A1-06%20%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%20%D0%B8%20%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BA%D0%BE%20%D1%81%D0%BD%D1%83.pdf&nosw=1'
    }, {
        id: v4(),
        title: 'Рисуем музыку',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F2ALO7Rp5sugd8uM8mJQWS8q2D%2BNN07tLpbwug%2BPpsdRQ1ENxMThmVKpXkOdYh1Yaq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9A%D0%95%D0%A1-07%20%D0%A0%D0%B8%D1%81%D1%83%D0%B5%D0%BC%20%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D1%83.pdf&nosw=1'
    }, {
        id: v4(),
        title: 'Овладеть своим настроением',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FDuWpap8C90lEGlG8%2FltH3MwxN7GGeLsBma8ReuWUuVRFGuE5AubmnTCvDQwInKTEq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9A%D0%95%D0%A1-10%20%D0%9E%D0%B2%D0%BB%D0%B0%D0%B4%D0%B5%D1%82%D1%8C%20%D1%81%D0%B2%D0%BE%D0%B8%D0%BC%20%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC.pdf&nosw=1'
    }, {
        id: v4(),
        title: 'Ритмы и звуки как лекарство',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FeSfogQYjuPzl1r1f3P9zpNwKH4VsmTvmtgtxkqJ85gM4DH68c08cTODUVyB875gFq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9A%D0%95%D0%A1%D0%A0%201112-02%20%D0%A0%D0%B8%D1%82%D0%BC%D1%8B%20%D0%B8%20%D0%B7%D0%B2%D1%83%D0%BA%D0%B8%20%D0%BA%D0%B0%D0%BA%20%D0%BB%D0%B5%D0%BA%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%BE.pdf&nosw=1'
    }, {
        id: v4(),
        title: 'Музицирование - это возможно',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Ffm3ssNF%2BvEeTtAjVROKNfqMC69Pjq3trDRv7Q0awUhO6XD1LhE44nQ8KcTI4yx%2FYq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=КЕСР 1112-03 Музицирование это возможно.pdf&nosw=1'
    }, {
        id: v4(),
        title: 'Как собрать детскую фонотеку',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FB49y4YXPaQjkTmuEzYAsoK04hBHcACNbeUPxQs3YghVGUU9JZmURLbIROg9ULep0q%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=КЕСР 1112-04 Как собрать детскую фонотеку.pdf&nosw=1'
    }, {
        id: v4(),
        title: 'Музыка в общении с ребёнком',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FOk539kk922TKK%2BErFsGYG6wVX%2FK2KPpDbdYxipRfFfvbuVrfzq0%2FJIYhJ8cjYmkbq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=КЕСР 1112-06 Музыка в общении с реб.pdf&nosw=1'
    }
]


