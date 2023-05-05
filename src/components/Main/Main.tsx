import React from "react";
import './main.module.css';
import main from './main.module.css'
import Type from "../common/Type";

function Main() {
    return (
        <div className={main.wrap}>
            <div className={main.container}>
                <div><Type/></div>
            </div>
        </div>
    );
}

export default Main