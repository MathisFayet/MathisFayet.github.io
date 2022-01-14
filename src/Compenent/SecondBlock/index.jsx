import React from "react";
import styled from 'styled-components';

import iphoneImage2 from "../../images/image-about-dark.jpg"
import iphoneImage3 from "../../images/image-about-light.jpg"

const SecondBlock = () => {
    return (
        <>
        <ContainerImage>
        {/* ----- Troisieme partie ------*/}
            <div className="md:w-full">
                <img className="w-full h-full" src={iphoneImage2}></img>
            </div>

        {/* ----- Quatrieme partie ------*/}
            <div className="m-10 md:mt-20 md:px-18 md:w-full">
                <div className="flex">
                    <h1 className="font-bold uppercase font-spartan text-base mr-3">A b o u t</h1>
                    <h1 className="font-bold uppercase font-spartan text-base mr-3">o u r</h1>
                    <h1 className="font-bold uppercase font-spartan text-base">f u r n i t u r e</h1>
                </div>
                <p className="text-gray-300 mt-4 font-sparta font-medium text-base md:text-sm">
                    Our multifunctional collection blends design and function to suit your individual taste. Make each
                    room unique, or pick a cohesive theme that best express your interests and what inspires you. Find 
                    the furniture pieces you need, from traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your dream space.
                </p>
            </div>
        {/* ----- Cinquieme partie ------*/}
            <div className="md:w-full">
                <img className="w-full h-full" src={iphoneImage3}></img>
            </div>
            </ContainerImage>
        </>
    )
}
export default SecondBlock;

const ContainerImage = styled.section`
    @media (min-width: 1440px) {
        display: flex;
    }
`;