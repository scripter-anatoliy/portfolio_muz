import { v4 } from "uuid";
import { assetSrc } from "@/lib/assetSrc";
import diplomaEight from "../Assets/Diplomas/diplomaEight.jpg";
import diplomaEleven from "../Assets/Diplomas/diplomaEleven.jpg";
import diplomaFifteen from "../Assets/Diplomas/diplomaFifteen.jpg";
import diplomaFour from "../Assets/Diplomas/diplomaFour.jpg";
import diplomaFourteen from "../Assets/Diplomas/diplomaFourteen.jpg";
import diplomaNine from "../Assets/Diplomas/diplomaNine.jpg";
import diplomaOne from "../Assets/Diplomas/diplomaOne.jpg";
import diplomaSeven from "../Assets/Diplomas/diplomaSeven.jpg";
import diplomaSix from "../Assets/Diplomas/diplomaSix.jpg";
import diplomaTen from "../Assets/Diplomas/diplomaTen.jpg";
import diplomaThirteen from "../Assets/Diplomas/diplomaThirteen.jpg";
import diplomaThree from "../Assets/Diplomas/diplomaThree.jpg";
import diplomaTwelve from "../Assets/Diplomas/diplomaTwelve.jpg";
import diplomaTwo from "../Assets/Diplomas/diplomaTwo.jpg";

export interface IImagesData {
  id: string;
  image: string;
}

export const imagesDiplomasData: IImagesData[] = [
  { id: v4(), image: assetSrc(diplomaOne) },
  { id: v4(), image: assetSrc(diplomaTwo) },
  { id: v4(), image: assetSrc(diplomaThree) },
  { id: v4(), image: assetSrc(diplomaFour) },
  { id: v4(), image: assetSrc(diplomaSix) },
  { id: v4(), image: assetSrc(diplomaSeven) },
  { id: v4(), image: assetSrc(diplomaEight) },
  { id: v4(), image: assetSrc(diplomaNine) },
  { id: v4(), image: assetSrc(diplomaTen) },
  { id: v4(), image: assetSrc(diplomaEleven) },
  { id: v4(), image: assetSrc(diplomaTwelve) },
  { id: v4(), image: assetSrc(diplomaThirteen) },
  { id: v4(), image: assetSrc(diplomaFourteen) },
  { id: v4(), image: assetSrc(diplomaFifteen) },
];
