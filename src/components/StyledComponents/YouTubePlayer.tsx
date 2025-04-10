import React, { useState } from "react";
import "./youTubePlayer.module.css";
import classes from "./youTubePlayer.module.css";
import placeholderImage from "../Assets/youTybeStop.jpg"; // Импортируем картинку

interface IYouTubePlayer {
  urlVideo: string;
}

export const YouTubePlayer = ({ urlVideo }: IYouTubePlayer) => {
  const [hasError, setHasError] = useState(false);

  const handleIframeError = () => {
    setHasError(true);
  };

  return (
    <div className={classes.wrapContainerVideo}>
      <div
        className={classes.video}
        style={hasError ? { paddingTop: 0 } : undefined}
      >
        {hasError ? (
          <img
            src={placeholderImage}
            alt="YouTube video placeholder"
            className={classes.placeholderImage}
          />
        ) : (
          <iframe
            src={urlVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={classes.iframe}
            onError={handleIframeError}
          />
        )}
      </div>
    </div>
  );
};
