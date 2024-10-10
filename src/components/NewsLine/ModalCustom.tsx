import { Modal } from "antd";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { IData, IImages } from "./NewsLine";
import "./newsLine.module.css";
import classes from "./newsLine.module.css";

interface IModalCustom {
  modal: IData | null;
  handleOk: (id: string) => void;
  handleCancel: () => void;
  isModalOpen: boolean;
}

export const ModalCustom: React.FC<IModalCustom> = ({
  modal,
  handleOk,
  handleCancel,
  isModalOpen,
}) => {
  return (
    <Modal
      style={{ textAlign: "center" }}
      footer={false}
      centered
      title={modal?.title}
      open={isModalOpen}
      width={1000}
      onOk={() => handleOk(String(modal?.id))}
      onCancel={handleCancel}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {modal?.images.map((image: IImages) => (
          <SwiperSlide>
            <div className={classes.wrapContainerImg}>
              <div key={image.id} className={classes.wrapImg}>
                <img
                  alt="default picture"
                  className={classes.img}
                  src={image.imageUrl}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classes.description}>
        {/*<div>{modal?.description.title}</div>*/}
        <div>{modal?.description.description}</div>
        <div className={classes.descriptionDate}>{modal?.description.date}</div>
      </div>
    </Modal>
  );
};
