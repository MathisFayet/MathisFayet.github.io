import React from "react";
import { useNavigate } from "react-router-dom";

import iphoneImage1 from "../images/mobile-image-hero-1.jpg"
import arrowIcon from "../images/icon-arrow.svg"
import SecondBlock from "./SecondBlock"

const FirstBlock = () => {
    
    const navigate = useNavigate();

    const handleClick = () => { {/* Function pour changer d'url au clic de l'icone*/}
        navigate('/video');
    }
    return (
        <>
        {/* ----- Premiere partie ------*/}
            <div>
                <img className="h-full w-full" src={iphoneImage1}></img>
            </div>

        {/* ----- Deuxieme partie ------*/}
            <div className="m-14">
                <div>
                    <h1 className="font-spartan font-bold text-2xl">Discover innovative ways to decorate</h1>
                </div>
                <p className="text-gray-300 mt-4 font-sparta font-medium text-base">
                    We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.
                </p>

                <div className="flex mt-12 mb-12">
                        <p className="font-spartan text-l font-medium mr-4">S H O P</p>
                        <p className="font-spartan text-l font-medium">N O W</p>
                    <img onClick={handleClick} className="w-12 h-4 mt-1 ml-10 transition duration-700 ease-in-out transform hover:scale-x-125" src={arrowIcon}></img>
                </div>
            </div>
            <SecondBlock/>
        </>
    ) 
}
export default FirstBlock;