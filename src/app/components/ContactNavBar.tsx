"use client";
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareWhatsapp, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactNavBar = () => {
return(
  <div className="bg-marrom-escuro text-verde-claro text-lg flex justify-between w-full p-3 sticky top-0">
    <div className='flex items-center gap-10 '>
      <a href="http://wa.link/4ry9x8" className="" target='_blank'><FontAwesomeIcon icon={faSquareWhatsapp} shake style={{color: "#ffdfff",}} size='xl'/> (21) 98463-2054</a>
      <a href="https://www.instagram.com/docurasamor.oficial/?hl=pt-br" target='_blank'><FontAwesomeIcon icon={faSquareInstagram} style={{color: "#ffdfff"}} size='xl' shake/> docurasamor.oficial</a>
    </div>

<form action="" className='relative w-1/3 max-w-md'>
  <input type="search" name="" id="" className='w-full text-marrom-escuro rounded-lg bg-verde-claro py-2 pl-3 pr-14 border-marrom-claro border-4' placeholder='Busque seu Doce!'/>
  <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-marrom-claro text-verde-claro rounded-full px-3 py-1 hover:bg-marrom-escuro transition-colors duration-300'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1.5rem" viewBox="0,0,256,256">
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
    textAnchor="none"
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
)
}

export default ContactNavBar