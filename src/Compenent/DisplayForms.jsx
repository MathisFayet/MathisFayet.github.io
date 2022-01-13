import React from 'react';
import { useNavigate } from "react-router-dom";

const DisplayForms = () => {
  const navigate = useNavigate();

  const navigateHome = () => { {/* Function pour changer d'url au clic de l'icone*/}
    navigate('/');
  }
  return (
    <>
      <div className="justify-center flex items-center mt-24">
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">

            <div class="w-full md:w-1/2 px-3 "> { /*  tailwind pour définir la taille du premier input */}
              <label class="block uppercase  text-gray-700 text-xs font-bold mb-2" for="grid-first-name">First Name</label>
              <input class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:bg-white" id="grid-first-name" type="text" placeholder="First Name"/>
            </div>

            <div class="w-full md:w-1/2 px-3"> { /*  tailwind pour définir la taille du deuxieme input */}
              <label class="block uppercase  text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Last Name</label>
              <input class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"/>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3"> { /*  tailwind pour définir la taille du troisieme input */}
              <label class="block uppercase  text-gray-700 text-xs font-bold mb-2" for="grid-password">E-mail</label>
              <input class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Your Email Adress"/>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3"> { /*  tailwind pour définir la taille du quatrieme input */}
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Message</label>
              <textarea class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Type your message here..."></textarea>
            </div>
          </div>

          <div class="flex justify-between">
            { /*  tailwind pour définir le premiere bouton */}
            <button class="shadow text-blue-200 hover:text-blue-400 font-bold py-2 px-4 rounded " type="button">Send</button>
            { /*  tailwind pour définir le deuxieme bouton */}
            <button onClick={navigateHome} class="shadow  text-red-200 hover:text-red-300 font-bold py-2 px-4 rounded" type="button">Go back</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default DisplayForms;


