import { YouTubePlayer } from "../StyledComponents/YouTubePlayer";
import "./developingEnvironment.module.css";
import classes from "./developingEnvironment.module.css";

function DevelopingEnvironment() {
  return (
    <div className={classes.gridContainer}>
      <YouTubePlayer urlVideo="https://www.youtube.com/embed/ofL6EPuf_ZE" />
      <YouTubePlayer urlVideo="https://www.youtube.com/embed/gECXvLnMw7w" />
      <YouTubePlayer urlVideo="https://www.youtube.com/embed/kWpHhcXSK5M" />
      <YouTubePlayer urlVideo="https://www.youtube.com/embed/Mj5ONMsIXRo" />
      <YouTubePlayer urlVideo="https://www.youtube.com/embed/IXVw_xdthAs" />
      <YouTubePlayer urlVideo="https://www.youtube.com/embed/gCU9R00cwTo" />
    </div>
  );
}

export default DevelopingEnvironment;
