import React from 'react';
import ReactPlayer from "react-player";

const DisplayVideo = () => {
  return (
    <>
        <div className="m-10 w-full h-full">
          <ReactPlayer url="https://youtu.be/mgmVOuLgFB0"/>
        </div>
    </>
  );
}
export default DisplayVideo;
