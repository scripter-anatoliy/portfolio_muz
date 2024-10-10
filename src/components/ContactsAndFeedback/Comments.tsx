import { Modal } from "antd";
import React from "react";
import icon1 from "../Assets/Icons/icons1.png";
import avatar from "../Assets/avatar.png";
import classes from "../ContactsAndFeedback/сontactsAndFeedback.module.css";
import { IDataComments } from "./ContactsAndFeedback";
import "./сontactsAndFeedback.module.css";

interface IComments {
  data: IDataComments[] | [];
  handleOk: (id: string) => void;
  handleCancel: () => void;
  isModalOpen: boolean;
}

export const Comments: React.FC<IComments> = ({
  data,
  handleOk,
  handleCancel,
  isModalOpen,
}) => {
  return (
    <Modal
      style={{ textAlign: "center" }}
      footer={false}
      centered
      title="Комментарии"
      open={isModalOpen}
      width={700}
      onOk={() => {}}
      onCancel={handleCancel}
    >
      <div className={classes.wrapModalArchive}>
        {data.map((item) => (
          <div key={item.id} className={classes.wrapCardArchive}>
            <div
              style={{ backgroundColor: "#eddd6a8a" }}
              className={classes.commentBlock}
            >
              <div className={classes.wrapAvatar}>
                <div className={classes.userName}>{item.name}</div>
                <img
                  style={{ width: "fit-content" }}
                  src={icon1}
                  alt="avatar"
                />
              </div>
              <div className={classes.commentUser}>
                <div className={classes.commentText}>{item.commentsUser}</div>
                <div className={classes.commentDate}>{item.dateComments}</div>
              </div>
            </div>
            <div
              style={{ marginLeft: 64, backgroundColor: "#ffd4c1" }}
              className={classes.commentBlock}
            >
              <div className={classes.wrapAvatar}>
                <div className={classes.userName}>Татьяна С.</div>
                <img
                  style={{ width: 64, borderRadius: 5 }}
                  src={avatar}
                  alt="avatar"
                />
              </div>
              <div className={classes.commentUser}>
                <div className={classes.commentText}>
                  {item.commentsResponse}
                </div>
                <div className={classes.commentDate}>{item.dateResponse}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};
