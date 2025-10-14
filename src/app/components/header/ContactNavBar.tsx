import React from "react";

import { FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

const ContactNavBar = () => {
  return (
    <>
      <div className="margin bg-marrom-escuro text-verde-claro text-lg flex justify-between p-3 gap-3">
        <div className="flex items-center sm:gap-10 md:gap-10">
          <div className="hover:text-rosa-claro" id="whatsapp">
            <a
              href="http://wa.link/4ry9x8"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="text-6xl text-verde-claro hover:text-rosa-claro" />
              <span className="hidden sm:inline text-xl">(21) 97518-8291</span>
            </a>
          </div>

          <div className="hover:text-rosa-claro" id="instagram">
            <a
              href="https://www.instagram.com/docurasamor.oficial/?hl=pt-br"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="text-6xl text-verde-claro hover:text-rosa-claro" />
              <span className="hidden sm:inline text-xl">docurasamor.oficial</span>
            </a>
          </div>
        </div>

        <form action="" className="relative sm:w-3/5 md:w-1/3 max-w-md flex">
          <input
            type="search"
            name=""
            id=""
            className="w-full text-marrom-escuro rounded-lg bg-verde-claro py-2 pl-3 pr-14 border-marrom-claro border-4"
            placeholder="Ache seu Doce!"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-marrom-claro text-verde-claro rounded-full px-3 py-1 hover:bg-marrom-escuro transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="1.5rem"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffdfff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="middle"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(4,4)">
                  <path d="M24,2.88867c-11.63429,0 -21.11133,9.47705 -21.11133,21.11133c0,11.63428 9.47704,21.11133 21.11133,21.11133c5.03655,0 9.6647,-1.77999 13.29883,-4.73828l14.83203,18.58008c0,0 3.24862,0.48286 5.26563,-1.61914c2.031,-2.118 1.55469,-5.19922 1.55469,-5.19922l-18.57812,-14.83594c2.95829,-3.63413 4.73828,-8.26228 4.73828,-13.29883c0,-11.63428 -9.47704,-21.11133 -21.11133,-21.11133zM24,7.11133c9.35255,0 16.88867,7.53613 16.88867,16.88867c0,9.35254 -7.53612,16.88867 -16.88867,16.88867c-9.35255,0 -16.88867,-7.53613 -16.88867,-16.88867c0,-9.35254 7.53612,-16.88867 16.88867,-16.88867z"></path>
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactNavBar;
