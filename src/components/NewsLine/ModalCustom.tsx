import React from "react";
import './newsLine.module.css';
import classes from './newsLine.module.css';
import {Carousel, Modal} from 'antd';
import {IData, IImages} from "./NewsLine";

interface IModalCustom {
    modal: IData | null
    handleOk: (id: string) => void
    handleCancel: () => void
    isModalOpen: boolean
}

export const ModalCustom: React.FC<IModalCustom> = ({modal, handleOk, handleCancel, isModalOpen}) => {


    return (
        <Modal style={{textAlign: 'center'}} footer={null} centered
               title={modal?.title} open={isModalOpen}
               width="90%"

               onOk={() => handleOk(String(modal?.id))} onCancel={handleCancel}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '65%'}}>
                    <Carousel autoplay dots={false} effect={'fade'} autoplaySpeed={5000}
                              pauseOnHover={false} speed={2000} arrows>
                        {modal?.images.map((image: IImages) =>
                            <div key={image.id} className={classes.wrapImg}>
                                <img alt='picture' className={classes.img}
                                     src={image.imageUrl}/>
                            </div>
                        )}
                    </Carousel>
                </div>
                <div className={classes.description}>
                    {/*<div>{modal?.description.title}</div>*/}
                    <div>{modal?.description.description}</div>
                    <div className={classes.descriptionDate}>{modal?.description.date}</div>
                </div>
            </div>
        </Modal>
    );
}