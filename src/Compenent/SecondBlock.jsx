import React from "react";

import iphoneImage2 from "../images/image-about-dark.jpg"
import iphoneImage3 from "../images/image-about-light.jpg"

const SecondBlock = () => {
    return (
        <>
        {/* ----- Troisieme partie ------*/}
            <div>
                <img className="h-full w-full" src={iphoneImage2}></img>
            </div>

        {/* ----- Quatrieme partie ------*/}
            <div className="m-12">
                <div className="flex">
                    <h1 className="font-bold uppercase font-spartan text-2l mr-3">A b o u t</h1>
                    <h1 className="font-bold uppercase font-spartan text-2l mr-3">o u r</h1>
                    <h1 className="font-bold uppercase font-spartan text-2l">f u r n i t u r e</h1>
                </div>
                <p className="text-gray-300 mt-4 font-sparta font-medium text-base ">
                    Our multifunctional collection blends design and function to suit your individual taste. Make each
                    room unique, or pick a cohesive theme that best express your interests and what inspires you. Find 
                    the furniture pieces you need, from traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your dream space.
                </p>
            </div>
        {/* ----- Cinquieme partie ------*/}
            <div>
                <img className="h-full w-full" src={iphoneImage3}></img>
            </div>
        </>
    )
}
export default SecondBlock;