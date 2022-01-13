import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import hamburgerIcon from "../images/icon-hamburger.svg"
import arrowIcon from "../images/icon-arrow.svg"
import SecondBlock from "./SecondBlock"
import angleRightIcon from "../images/icon-angle-right.svg"
import angleLeftIcon from "../images/icon-angle-left.svg"

import iphoneImage1 from "../images/mobile-image-hero-1.jpg"
import iphoneImage2 from "../images/image-about-dark.jpg"

import desktopImage1 from "../images/desktop-image-hero-1.jpg"

const FirstBlock = () => {
    
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navigateVideo = () => { {/* Function pour changer d'url au clic de l'icone*/}
        navigate('/video');
    }
    const navigateForms = () => { {/* Function pour changer d'url au clic de l'icone*/}
        navigate('/forms');
    }
    const printMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <ContainerImage className="">
        {
            isOpen ?
                <div className="position: absolute">
                    <div className="flex mt-14">
                        <h1 onClick={navigateVideo} className="font-spartan cursor-default	hover:text-yellow-400 font-bold text-white text-xs mr-3 ml-24">home</h1>
                        <h1 onClick={navigateForms} className="font-spartan cursor-default	hover:text-green-400 font-bold text-white text-xs mr-3">shop</h1>
                        <h1 onClick={navigateVideo} className="font-spartan cursor-default	hover:text-red-400 font-bold text-white text-xs mr-3">about</h1>
                        <h1 onClick={navigateForms} className="font-spartan cursor-default	hover:text-blue-400 font-bold text-white text-xs">contact</h1>
                    </div>
                </div>
            : null
        }    
        {/* ----- Premiere partie ------*/}
            <BackgroundImage>
                <div className="position: absolute">
                    <div className="flex p-8 ">
                        <ContainerMenu>
                            <button onClick={printMenu}><img className={`transition duration-300 ease-in-out transform hover:scale-y-125 mt-4 ${isOpen ? 'mt-6' : ''}`} src={hamburgerIcon} /></button>
                        </ContainerMenu>
                        <div>
                        <ContainerTitle>
                            <h1 className={`font-spartan text-2xl text-white font-bold mt-3 ml-28 ${isOpen ? 'hidden' : ''}`}>room</h1>
                        </ContainerTitle>
                        </div>
                    </div>
                </div>
            </BackgroundImage>
        {/* ----- Deuxieme partie ------*/}
            <div className="m-10 pt-8">
                <div className="">
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
                    <img onClick={navigateVideo} className="w-12 h-4 mt-1 ml-10 transition duration-700 ease-in-out transform hover:scale-x-125" src={arrowIcon}></img>
                </div>
            </div>
            <SecondBlock/>
            </ContainerImage>
        </>
    ) 
}
export default FirstBlock;

const BackgroundImage = styled.section`
@media (min-width: 375px) {
    background-image: url(${desktopImage1});
}
background-image: url(${iphoneImage1});
    width: 375px;
    height: 360px;
    background-repeat: no-repeat
`;

const ContainerMenu = styled.section`
@media (min-width: 1440px) {
    display: none;
}
`;

const ContainerTitle = styled.section`
@media (min-width: 1440px) {
    margin-left: -100px;
}
`

const ContainerImage = styled.section`
@media (min-width: 1440px) {
}
`;