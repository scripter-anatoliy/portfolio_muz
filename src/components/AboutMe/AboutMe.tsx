import React, {useEffect, useState} from "react";
import './aboutMe.module.css';
import aboutMe from './aboutMe.module.css'
import {v4} from "uuid";
// import image1 from '../Assets/AboutMeImages/image1.jpg';
// import image2 from '../Assets/AboutMeImages/image2.jpg';
// import image3 from '../Assets/AboutMeImages/image3.jpg';
// import image4 from '../Assets/AboutMeImages/image4.jpg';

interface PersonalDataType {
    id: string,
    title: string,
    description: string
}

const personalData: PersonalDataType[] = [
    {
        id: v4(),
        title: 'Имя:',
        description: 'Селиванова Татьяна'
    },
    {
        id: v4(),
        title: 'Email:',
        description: 'lomovka2km@rambler.ru'
    },
    {
        id: v4(),
        title: 'Дата Рождения:',
        description: '23 Апреля, 1987'
    },
    {
        id: v4(),
        title: 'Адрес:',
        description: 'Самара, Российская федерация'
    }
]

export const AboutMe = () => {

    const [currentNumber, setCurrentNumber] = useState<number>(1);
    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        if(showElement){
            const interval = setInterval(() => {
                if (currentNumber < 15) {
                    setCurrentNumber(currentNumber + 1);
                } else {
                    clearInterval(interval);
                }
            }, 200); // Измените значение 100 на нужное вам значение задержки (в миллисекундах)

            return () => clearInterval(interval);
        }
    }, [currentNumber, 40, showElement]);

    useEffect(() => {
        const handleScroll = () => {
            // const element = document.getElementById('target-element');
                setShowElement(true);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="part-2" style={{display: "flex"}} data-aos="fade-in">
                <div>
                    <div className={`${aboutMe.wrapWelcome} ${aboutMe.display}`}>
                        <span data-aos="fade-in" className={aboutMe.welcome}>Приветствую, я</span>
                        <span data-aos="fade-in" className={`${aboutMe.welcomeFio} ${aboutMe.display}`}> Селиванова Татьяна</span>
                    </div>
                    <div className={aboutMe.wrapText}>
                                <span data-aos="fade-in">Работаю музыкальным руководителем в МБОУ "Школа №176" (дошкольные группы) со всеми
                                возрастными группами.
                                </span>
                        <span data-aos="fade-in"><b>Музыкальный руководитель - это не просто профессия</b>,
                                    это состояние души, возможность
                                постоянно находиться в мире детства, в мире сказки и фантазии.
                                </span>
                        <span data-aos="fade-in">ОБРАЗОВАНИЕ</span>
                        <span data-aos="fade-in">2004-2008гг. Самарский социально-педагогический колледж, Музыкальное отделение.
                                Квалификация - учитель музыки, музыкальный руководитель в детском саду.</span>
                        <span data-aos="fade-in">2008-2012гг. Московский городской педагогический университет (Самарский филиал).
                                Квалификация - педагог-психолог.</span>
                        <span data-aos="fade-in">2015-2016гг. Самарский государственный социально-педагогический университет.</span>
                        <span data-aos="fade-in">Квалификация - учитель-логопед.</span>
                    </div>
                </div>
                <div className={aboutMe.wrapNumber}>
                    {showElement &&
                    <div className={aboutMe.number}>
                        {currentNumber}
                    </div>
                    }
                    <div className={aboutMe.experienceText}>
                        <span>Лет </span>
                        <span><b>опыта</b></span>
                    </div>
                </div>
            </div>
            <div className={aboutMe.wrapPersonalData}>
                {personalData.map((item) => (
                    <div key={item.id} className={aboutMe.personalDataBlock}>
                        <span className={aboutMe.personalDataTitle}>{item.title}</span>
                        {item.title === 'Email:' ?
                            <span className={aboutMe.personalDataDescription}><a
                                href={`mailto:${item.description}`}>{item.description}</a></span>
                            :
                            <span className={aboutMe.personalDataDescription}>{item.description}</span>
                        }
                    </div>
                ))}
            </div>
            {/*<Carousel autoplay dots={false} effect={'fade'} autoplaySpeed={5000}*/}
            {/*          pauseOnHover={false} speed={2000}>*/}
            {/*    <div className={aboutMe.wrapImg}>*/}
            {/*        <img alt='1' className={aboutMe.img}*/}
            {/*             src={image1}/>*/}
            {/*    </div>*/}
            {/*    <div className={aboutMe.wrapImg}>*/}
            {/*        <img alt={'2'} className={aboutMe.img}*/}
            {/*             src={image2}/>*/}
            {/*    </div>*/}
            {/*    <div className={aboutMe.wrapImg}>*/}
            {/*        <img alt={'3'} className={aboutMe.img}*/}
            {/*             src={image3}/>*/}
            {/*    </div>*/}
            {/*    <div className={aboutMe.wrapImg}>*/}
            {/*        <img alt={'4'} className={aboutMe.img}*/}
            {/*             src={image4}/>*/}
            {/*    </div>*/}
            {/*</Carousel>*/}
        </>
    );
}