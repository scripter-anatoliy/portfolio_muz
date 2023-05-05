import React from "react";
import './contentForParents.module.css';
import contentForParents from './contentForParents.module.css'

function ContentForParents() {
    return (
        <div className={contentForParents.wrap}>
            <div className={contentForParents.container}>
                <div>Для родителей</div>
            </div>
        </div>
    );
}

export default ContentForParents