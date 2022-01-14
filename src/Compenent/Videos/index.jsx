import React from 'react';
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const DisplayVideo = () => {
  const navigate = useNavigate();

  const navigateHome = () => { {/* Function pour changer d'url au clic de l'icone*/}
    navigate('/');
  }
  return (
    <>
        <div className=" justify-center flex mt-24">
          <ReactPlayer url="https://youtu.be/mgmVOuLgFB0"/>
        </div>
        <div className="justify-center flex mt-24">
          <button onClick={navigateHome} className="shadow text-red-200 hover:text-red-300 font-bold py-2 px-4 rounded" type="button">Go back</button>
        </div>

    </>
  );
}
export default DisplayVideo;
