import { Modal } from "antd";
import React from "react";
import { ModalCustom } from "./ModalCustom";
import { IData } from "./NewsLine";
import "./newsLine.module.css";
import classes from "./newsLine.module.css";

interface IArchiveNews {
  archiveNews: IData[] | [];
  handleOk: (id: string) => void;
  handleCancel: () => void;
  isModalOpen: boolean;
  object: IData | null;
  isModalOpenNew: boolean;
  setIsModalOpenNew: (value: boolean) => void;
  setIsModalOpenArсhiveNews: (value: boolean) => void;
  setObjectModal: (object: IData) => void;
}

export const ArchiveNews: React.FC<IArchiveNews> = (props) => {
  const {
    archiveNews,
    handleOk,
    handleCancel,
    isModalOpen,
    object,
    isModalOpenNew,
    setIsModalOpenNew,
    setObjectModal,
    setIsModalOpenArсhiveNews,
  } = props;

  // const [objectModal, setObjectModal] = useState<IData | null>(null);

  const showModal = (object: IData, archive: boolean) => {
    setIsModalOpenNew(true);
    setObjectModal(object);
  };

  const handleCancelArchiveNews = () => {
    setIsModalOpenArсhiveNews(false);
  };

  return (
    <>
      <Modal
        style={{ textAlign: "center" }}
        footer={false}
        centered
        title="Архив новостей"
        open={isModalOpen}
        width={700}
        onOk={() => {}}
        onCancel={handleCancelArchiveNews}
      >
        <div className={classes.wrapModalArchive}>
          {archiveNews.length <= 0 && <div>новостей в архиве нет</div>}
          {archiveNews.map((item) => (
            <div key={item.id} className={classes.wrapCardArchive}>
              <div style={{ width: 200 }}>
                <div
                  onClick={() => showModal(item, true)}
                  className={classes.imageBlock}
                >
                  <div
                    style={{ top: "35%" }}
                    className={classes.imageBlockHover}
                  >
                    Посмотреть
                  </div>
                  <img
                    alt="default"
                    className={classes.wrapCardImage}
                    src={item.splashPictureUrl}
                  />
                </div>
              </div>
              <div className={classes.text}>
                <div className={classes.title}>{item.title}</div>
                <div className={classes.descriptionArchive}>
                  {item.description.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
      <ModalCustom
        modal={object}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpenNew}
      />
    </>
  );
};
