import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { v4 } from "uuid";
import classes from "../ContactsAndFeedback/сontactsAndFeedback.module.css";
import { Comments } from "./Comments";
import { Contacts } from "./Contacts";
import { send } from "@emailjs/browser";

export const ContactsAndFeedback = () => {
  const [form] = useForm();
  const [isSending, setIsSending] = useState(false);
  const [isModalOpenComments, setIsModalOpenComments] = useState(false);
  const dataComments = data;

  const onFinish = (values: any) => {
    setIsSending(true);
    send("service_9djekxe", "template_r8pgg48", values, "JqwxjMrXOxQ6rvnYl")
      .then(() => {
        form.resetFields();
      })
      .catch((error: any) => {
        console.log(error.text);
      })
      .finally(() => {
        setTimeout(() => setIsSending(false), 5000);
      });
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} должно быть заполнено!",
    types: {
      email: "Введите корректный ${label}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const handleOk = () => {
    setIsModalOpenComments(false);
  };

  const handleCancel = () => {
    setIsModalOpenComments(false);
  };

  return (
    <div id="part-7" className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.containerBlock}>
          <Contacts />
          <div className={classes.wrapContent}>
            <h3>Обратная связь</h3>
            <div style={{ position: "relative" }}>
              <Form
                {...layout}
                form={form}
                name="nest-messages"
                onFinish={onFinish}
                style={{ width: "100%", opacity: isSending ? 0.3 : 1 }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  className={classes.wrapInput}
                  name="user_name"
                  label="Имя"
                  rules={[{ required: true }]}
                >
                  <Input
                    name="user_name"
                    type="text"
                    className={classes.input}
                  />
                </Form.Item>
                <Form.Item
                  className={classes.wrapInput}
                  name="user_email"
                  label="Email"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input
                    name="user_email"
                    type="email"
                    className={classes.input}
                  />
                </Form.Item>
                <Form.Item
                  className={classes.wrapInput}
                  name="message"
                  label="Сообщение"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите сообщение!",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    name="message"
                    showCount
                    maxLength={200}
                    className={classes.input}
                  />
                </Form.Item>
                <Form.Item
                  className={classes.button}
                  wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                >
                  <Button
                    disabled={isSending}
                    style={{ marginInlineStart: "unset" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Отправить
                  </Button>
                </Form.Item>
              </Form>
              {isSending && (
                <div className={classes.comment}>Спасибо за комментарий!</div>
              )}
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Button
            onClick={() => setIsModalOpenComments(true)}
            disabled={isSending}
            style={{ marginInlineStart: "unset", width: 200 }}
            type="primary"
            htmlType="submit"
          >
            Комментарии
          </Button>
        </div>
        <Comments
          data={dataComments}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpenComments}
        />
      </div>
    </div>
  );
};

export interface IDataComments {
  id: string;
  name: string;
  dateComments: string;
  dateResponse: string;
  commentsUser: string;
  commentsResponse: string;
}

export const data: IDataComments[] = [
  {
    id: v4(),
    name: "Виктория",
    dateComments: "18.09.2023г.",
    dateResponse: "19.09.2023г.",
    commentsUser:
      "Замечательный сайт - информативный контент, много интересных видео и методических материалов. Профессионально и содержательно.",
    commentsResponse: "Спасибо большое за отзыв!",
  },
];
