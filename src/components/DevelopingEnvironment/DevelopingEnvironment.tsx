import "./developingEnvironment.module.css";
import classes from "./developingEnvironment.module.css";

function DevelopingEnvironment() {
  return (
    <div className={classes.gridContainer}>
      <div className={classes.wrapContainerVideo}>
        <div className={classes.video}>
          <iframe
            src="https://www.youtube.com/embed/ofL6EPuf_ZE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={classes.iframe}
          ></iframe>
        </div>
      </div>
      <div className={classes.wrapContainerVideo}>
        <div className={classes.video}>
          <iframe
            src="https://www.youtube.com/embed/gECXvLnMw7w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={classes.iframe}
          ></iframe>
        </div>
      </div>
      <div className={classes.wrapContainerVideo}>
        <div className={classes.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kWpHhcXSK5M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={classes.iframe}
          ></iframe>
        </div>
      </div>
      <div className={classes.wrapContainerVideo}>
        <div className={classes.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Mj5ONMsIXRo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={classes.iframe}
          ></iframe>
        </div>
      </div>
      <div className={classes.wrapContainerVideo}>
        <div className={classes.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IXVw_xdthAs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={classes.iframe}
          ></iframe>
        </div>
      </div>
      <div className={classes.wrapContainerVideo}>
        <div className={classes.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gCU9R00cwTo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={classes.iframe}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default DevelopingEnvironment;
