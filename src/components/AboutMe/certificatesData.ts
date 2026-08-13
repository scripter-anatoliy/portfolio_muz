import { v4 } from "uuid";
import { assetSrc } from "@/lib/assetSrc";
import certificateOne from "../Assets/RefresherCourses/certificateOne.jpg";
import certificateThree from "../Assets/RefresherCourses/certificateThree.jpg";
import certificateTwo from "../Assets/RefresherCourses/certificateTwo.jpg";
import { IImagesData } from "./diplomasData";

export const imagesQualificationData: IImagesData[] = [
  { id: v4(), image: assetSrc(certificateOne) },
  { id: v4(), image: assetSrc(certificateTwo) },
  { id: v4(), image: assetSrc(certificateThree) },
];
