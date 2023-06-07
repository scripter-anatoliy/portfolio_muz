import React, {useState} from "react";
import './header.module.css';

import header from './header.module.css'
import TrebleClef from "../Assets/Icons/TrebleClef";
import Telegram from "../Assets/Icons/Telegram";

interface IHeader {
    showClick: () => void
    // isShow: boolean
}

export const Header: React.FC<IHeader> = ({showClick}) => {

    const [scroll, setScroll] = useState(false);


    const name = 'Селиванова'.toUpperCase()

    function scrollHandler() {
        if (window.scrollY >= 5) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <div className={scroll ? `${header.wrap} ${header.mySticky}` : header.wrap}>
            <div className={header.container}>
                <div className={`${header.display} ${header.name}`}>{name}</div>
                <div className={header.display}>
                    <a className={header.display} href="https://t.me/Selivan4iki"><Telegram/></a>
                    <div className={`${header.burgerMenu} ${header.display}`} onClick={showClick}><TrebleClef/></div>
                </div>
            </div>
                    </div>
    )
}