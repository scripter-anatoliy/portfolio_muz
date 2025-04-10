import { v4 } from "uuid";
import certificateOne from "../Assets/RefresherCourses/certificateOne.jpg";
import certificateThree from "../Assets/RefresherCourses/certificateThree.jpg";
import certificateTwo from "../Assets/RefresherCourses/certificateTwo.jpg";
import { IImagesData } from "./diplomasData";

export const imagesQualificationData: IImagesData[] = [
  { id: v4(), image: certificateOne },
  { id: v4(), image: certificateTwo },
  { id: v4(), image: certificateThree },
];
