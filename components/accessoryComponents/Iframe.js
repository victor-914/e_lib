import React from "react";

function Frame({ url, width, height }) {
  return (
    <iframe
      width={`${width}`}
      frameborder="0"
      height={`${height}`}
      web-share
      xr-spatial-tracking
      allow="autoplay; fullscreen; xr-spatial-tracking"
      execution-while-out-of-viewport
      execution-while-not-rendered
      allowfullscreen
      src={url}
      className="m-auto"
    ></iframe>
  );
}

export default Frame;
