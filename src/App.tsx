import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import Main from "./components/Main/Main";
import {NewsLine} from "./components/NewsLine/NewsLine";
import ContentForParents from "./components/ContentForParents/ContentForParents";
import DevelopingEnvironment from "./components/DevelopingEnvironment/DevelopingEnvironment";
import {StyledContainer} from "./components/StyledComponents/StyledContainer";
import {AboutMe} from "./components/AboutMe/AboutMe";
import AOS from 'aos';
import 'aos/dist/aos.css'
import {BurgerMenu} from "./components/Menu/BurgerMenu";
import {Space, Spin} from 'antd';

// interface IApp {
//     id: string,
//     content: React.ReactNode
// }

AOS.init()

export const App = () => {

    const [show, setShow] = useState(false);

    const onClick = () => {
        setShow(!show)
    }
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Ваш код для загрузки данных или выполнения операций
        // Когда загрузка завершена, установите isLoading в false
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Пример задержки 2 секунды
    }, []);

    if (isLoading) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
            }}>
                <Spin style={{height: 'auto'}} size="large"/>
            </div>
        )
    }


    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header showClick={onClick}/>
        <Main/>
        <StyledContainer id='part-2' title='Обо мне' description='Подробно обо мне' backgroundStyle={'#ffffff'}
                         children={<AboutMe/>}/>
        <StyledContainer id='part-3' title='Лента новостей' description='Посмотрите, какие события у нас'
                         backgroundStyle={'rgb(237 160 206)'} children={<NewsLine/>}/>
        <ContentForParents/>
        <StyledContainer id='part-5' title='Творческая копилка' description='Творчесвто - наше всё'
                         backgroundStyle={'rgb(160 237 163)'} children={<DevelopingEnvironment/>}/>
        {show && <BurgerMenu/>}
    </div>

}

