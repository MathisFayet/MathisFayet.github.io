import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import hamburgerIcon from "../../images/icon-hamburger.svg"
import arrowIcon from "../../images/icon-arrow.svg"
import SecondBlock from "../SecondBlock/"
import angleRightIcon from "../../images/icon-angle-right.svg"
import angleLeftIcon from "../../images/icon-angle-left.svg"
import iphoneImage1 from "../../images/mobile-image-hero-1.jpg"
import desktopImage1 from "../../images/desktop-image-hero-1.jpg"

const HeaderNav = ({navigateVideo, navigateForms}) => (
    <>
        <div className="position: absolute">
            <div className="flex mt-14">
                <h1 onClick={navigateVideo} className="font-spartan cursor-default	hover:text-gray-600 font-bold text-white text-xs mr-3 md:mr-8 ml-24 md:ml-40">home</h1>
                <h1 onClick={navigateForms} className="font-spartan cursor-default	hover:text-gray-600 font-bold text-white text-xs mr-3 md:mr-8">shop</h1>
                <h1 onClick={navigateVideo} className="font-spartan cursor-default	hover:text-gray-600 font-bold text-white text-xs mr-3 md:mr-8">about</h1>
                <h1 onClick={navigateForms} className="font-spartan cursor-default	hover:text-gray-600 font-bold text-white text-xs">contact</h1>
            </div>
        </div>
    </>
)

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
            <ContainerImage>
                {
                    isOpen ? <HeaderNav navigateVideo={navigateVideo} navigateForms={navigateForms} /> : null
                }
                <div className="hidden md:block">
                    <HeaderNav navigateVideo={navigateVideo} navigateForms={navigateForms} />
                </div>
                {/* ----- Premiere partie ------*/}
                <BackgroundImage classname="md:w-2/3">
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
                <TextInfo className="m-10 md:mt-32 md:px-28 pt-8 md:pt-0">
                    <div className="">
                        <h1 className="font-spartan font-bold text-2xl md:text-4xl">Discover innovative ways to decorate</h1>
                    </div>
                    <p className="text-gray-300 mt-4 font-sparta font-medium text-base md:text-sm">
                        We provide unmatched quality, comfort, and style for property owners across the country. 
                        Our experts combine form and function in bringing your vision to life. Create a room in your 
                        own style with our collection and make your property a reflection of you and what you love.
                    </p>

                    <div className="flex mt-12 mb-12 cursor-default transition duration-700 ease-in-out transform hover:scale-x-105" onClick={navigateVideo}>
                            <SpacedText className="font-spartan text-l font-medium">SHOP NOW</SpacedText>
                        <img className="w-12 h-4 mt-1 ml-10" src={arrowIcon}></img>
                    </div>
                    <CarrousselInput className="hidden md:flex h-1/6 bg-black">
                        <button className="w-1/2 h-full flex items-center justify-center">
                            <img src={angleLeftIcon} alt="Carroussel Left Input"/>
                        </button>
                        <button className="w-1/2 h-full flex items-center justify-center">
                            <img src={angleRightIcon} alt="Carroussel Right Input"/>
                        </button>
                    </CarrousselInput>
                </TextInfo>
            </ContainerImage>
            <SecondBlock/>
        </>
    ) 
}
export default FirstBlock;

const BackgroundImage = styled.section`
@media (min-width: 1440px) {
    width: 62rem;
    height: 38rem;
    background-size: cover;
}
@media (min-width: 376px) {
    background-image: url(${desktopImage1});
}
@media (max-width: 376px) {
    background-image: url(${iphoneImage1});
    width: 375px;
    height: 360px;
    background-repeat: no-repeat
}
`;

const TextInfo = styled.section`
@media (min-width: 1440px) {
    width: 38%;
    position: relative;
}
`;

const SpacedText = styled.section`
@media (min-width: 1440px) {
    letter-spacing: 1.22rem;
}   
`;

const CarrousselInput = styled.section`
@media (min-width: 1440px) {
    width: 28.6%;
    position: absolute;
    left: -40px;
    bottom: -40px;
}   
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
    display: flex;
}
`;