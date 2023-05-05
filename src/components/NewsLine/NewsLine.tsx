import React from "react";
import './newsLine.module.css';
import newsLine from './newsLine.module.css'

function NewsLine() {
    return (
        <div className={newsLine.wrap}>
            <div className={newsLine.container}>
                <div>Лента новостей + последние события</div>
            </div>
        </div>
    );
}

export default NewsLine