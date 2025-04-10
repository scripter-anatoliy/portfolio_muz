import { v4 } from "uuid";
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
  { id: v4(), image: diplomaOne },
  { id: v4(), image: diplomaTwo },
  { id: v4(), image: diplomaThree },
  { id: v4(), image: diplomaFour },
  { id: v4(), image: diplomaSix },
  { id: v4(), image: diplomaSeven },
  { id: v4(), image: diplomaEight },
  { id: v4(), image: diplomaNine },
  { id: v4(), image: diplomaTen },
  { id: v4(), image: diplomaEleven },
  { id: v4(), image: diplomaTwelve },
  { id: v4(), image: diplomaThirteen },
  { id: v4(), image: diplomaFourteen },
  { id: v4(), image: diplomaFifteen },
];
