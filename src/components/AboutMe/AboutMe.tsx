import React from "react";
import './aboutMe.module.css';
import aboutMe from './aboutMe.module.css'

function AboutMe() {
    return (
        <div className={aboutMe.wrap}>
            <div className={aboutMe.container}>
                <div>Подробно обо мне + фото с занятий</div>
            </div>
        </div>
    );
}

export default AboutMe