import React from 'react';
import {Button, Tooltip} from "antd";
import classes from './../AboutMe/aboutMe.module.css'

interface IButton{
    title: string
    onClick: ()=>void
    tooltip: string
}

export const StyledButton: React.FC<IButton> = ({title, onClick, tooltip}) => {


    return (
        <Tooltip title={tooltip}>
            <Button size="middle" className={classes.button} type="primary"
                    onClick={onClick}>
                {title}
            </Button>
        </Tooltip>
    );
};
