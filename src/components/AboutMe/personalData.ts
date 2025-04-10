import { v4 } from "uuid";

export interface PersonalDataType {
  id: string;
  title: string;
  description: string;
}

export const personalData: PersonalDataType[] = [
  {
    id: v4(),
    title: "Имя:",
    description: "Селиванова Татьяна",
  },
  {
    id: v4(),
    title: "Email:",
    description: "lomovka2km@rambler.ru",
  },
  {
    id: v4(),
    title: "Дата Рождения:",
    description: "23 Апреля, 1989",
  },
  {
    id: v4(),
    title: "Адрес:",
    description: "Самара, Российская Федерация",
  },
];
