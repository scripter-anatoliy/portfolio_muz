import React, {useState} from "react";
import './newsLine.module.css';
import classes from './newsLine.module.css';
import {Carousel, Modal} from 'antd';
import {IModal} from "./NewsLine";

interface IModalCustom {
    modal: IModal
    handleOk: () => void
    handleCancel: () => void
    isModalOpen:boolean
}

export const ModalCustom: React.FC<IModalCustom> = ({modal, handleOk, handleCancel, isModalOpen}) => {


    return (
        <Modal style={{textAlign: 'center'}} footer={null} centered
               title="Basic Modal" open={isModalOpen}
               width="90%"

               onOk={handleOk} onCancel={handleCancel}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '75%'}}>
                    <Carousel autoplay dots={false} effect={'fade'} autoplaySpeed={5000}
                              pauseOnHover={false} speed={2000} arrows>
                        {modal.images.map((image) =>
                            <div id={image.id} className={classes.wrapImg}>
                                <img alt='picture' className={classes.img}
                                     src={image.imageUrl}/>
                            </div>
                        )}
                    </Carousel>
                </div>
                <div style={{width: '35%'}}>
                    <div>{modal.description.title}</div>
                    <div>{modal.description.description}</div>
                    <div>{modal.description.date}</div>
                </div>
            </div>
        </Modal>
    );
}