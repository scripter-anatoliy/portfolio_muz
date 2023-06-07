import React from "react";
import './main.module.css';
import main from './main.module.css'
import Type from "../common/Type";


function Main() {


    return (
        <div id="part-1" className={main.wrap}>
            <div className={main.container}>
                <div className={main.greeting}>
                    <div>Приветсвую! Я Татьяна!</div>
                    <div className={main.typewriter}><Type/></div>
                </div>
                <div className={main.wrapAvatar}>
                    <div className={main.avatar}></div>
                </div>
            </div>
        </div>
    );
}

export default Main